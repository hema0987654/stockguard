"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const invoice_item_entity_1 = require("../invoice-item/entities/invoice-item.entity");
const pdfkit_1 = __importDefault(require("pdfkit"));
let ReportsService = class ReportsService {
    invoiceItemRepository;
    constructor(invoiceItemRepository) {
        this.invoiceItemRepository = invoiceItemRepository;
    }
    async getProfit(type, date) {
        const qb = this.invoiceItemRepository
            .createQueryBuilder('item')
            .leftJoin('item.product', 'product')
            .leftJoin('item.invoice', 'invoice')
            .select('SUM((item.unitPrice - product.buyPrice) * item.quantity)', 'profit')
            .where('invoice.type = :typeSale', { typeSale: 'sale' });
        if (type === 'day') {
            qb.andWhere('DATE(item.created_at) = :date', { date });
        }
        else if (type === 'month') {
            qb.andWhere('EXTRACT(MONTH FROM item.created_at) = :month', {
                month: new Date(date).getMonth() + 1,
            }).andWhere('EXTRACT(YEAR FROM item.created_at) = :year', {
                year: new Date(date).getFullYear(),
            });
        }
        else if (type === 'year') {
            qb.andWhere('EXTRACT(YEAR FROM item.created_at) = :year', {
                year: new Date(date).getFullYear(),
            });
        }
        const result = await qb.getRawOne();
        return { profit: Number(result.profit) || 0 };
    }
    async getQuantityOfProductsSold(date) {
        const qb = this.invoiceItemRepository
            .createQueryBuilder('item')
            .leftJoin('item.product', 'product')
            .leftJoin('item.invoice', 'invoice')
            .select('product.id', 'productid')
            .addSelect('product.name', 'productname')
            .addSelect('SUM(item.quantity)', 'totalsold')
            .where('invoice.type = :type', { type: 'sale' })
            .groupBy('product.id')
            .addGroupBy('product.name');
        if (date)
            qb.andWhere('DATE(item.created_at) = :date', { date });
        return (await qb.getRawMany()).map((p) => ({
            productName: p.productname,
            totalSold: Number(p.totalsold),
        }));
    }
    async getBestSellingProducts(limit = 10, date) {
        const qb = this.invoiceItemRepository
            .createQueryBuilder('item')
            .leftJoin('item.product', 'product')
            .leftJoin('item.invoice', 'invoice')
            .select('product.id', 'productid')
            .addSelect('product.name', 'productname')
            .addSelect('SUM(item.quantity)', 'totalsold')
            .where('invoice.type = :type', { type: 'sale' })
            .groupBy('product.id')
            .addGroupBy('product.name')
            .orderBy('totalsold', 'DESC')
            .limit(limit);
        if (date)
            qb.andWhere('DATE(item.created_at) = :date', { date });
        return (await qb.getRawMany()).map((p) => ({
            productName: p.productname,
            totalSold: Number(p.totalsold),
        }));
    }
    async getMostActiveSuppliers(date) {
        const qb = this.invoiceItemRepository
            .createQueryBuilder('item')
            .leftJoin('item.product', 'product')
            .leftJoin('product.supplier', 'supplier')
            .leftJoin('item.invoice', 'invoice')
            .select('supplier.id', 'supplierid')
            .addSelect('supplier.name', 'suppliername')
            .addSelect('SUM(item.quantity)', 'totalsold')
            .where('invoice.type = :type', { type: 'sale' })
            .groupBy('supplier.id')
            .addGroupBy('supplier.name')
            .orderBy('totalsold', 'DESC');
        if (date)
            qb.andWhere('DATE(item.created_at) = :date', { date });
        return (await qb.getRawMany()).map((s) => ({
            supplierName: s.suppliername,
            totalSold: Number(s.totalsold),
        }));
    }
    async exportFullReportPDF(date, res) {
        const doc = new pdfkit_1.default({ margin: 40, size: 'A4' });
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=full-report.pdf');
        doc.pipe(res);
        doc
            .fontSize(20)
            .fillColor('#003366')
            .text('Stock Guard System', { align: 'center' });
        doc
            .fontSize(14)
            .fillColor('#666')
            .text(`Full Report for ${date}`, { align: 'center' });
        doc.moveDown(2);
        const profitResult = await this.getProfit('day', date);
        const profit = profitResult.profit || 0;
        doc
            .fontSize(16)
            .fillColor('#003366')
            .text('Daily Profit', { underline: true });
        doc.moveDown(0.5);
        doc
            .fontSize(14)
            .fillColor('black')
            .text(`$${profit.toFixed(2)}`);
        doc.moveDown(1);
        const soldProducts = await this.getQuantityOfProductsSold(date);
        doc
            .fontSize(16)
            .fillColor('#003366')
            .text('Quantity of Sold Products', { underline: true });
        doc.moveDown(0.5);
        const tableTop = doc.y;
        const itemX = 50;
        const qtyX = 400;
        doc
            .fontSize(12)
            .fillColor('#ffffff')
            .rect(itemX - 5, tableTop - 2, 500, 20)
            .fill('#003366');
        doc.fillColor('#ffffff').text('Product Name', itemX, tableTop);
        doc.text('Quantity Sold', qtyX, tableTop);
        doc.moveDown();
        doc.fillColor('black');
        soldProducts.forEach((p, i) => {
            const y = tableTop + 25 + i * 20;
            doc.text(p.productName, itemX, y);
            doc.text(p.totalSold.toString(), qtyX, y);
        });
        doc.moveDown(2);
        const bestSelling = await this.getBestSellingProducts(10, date);
        doc
            .fontSize(16)
            .fillColor('#003366')
            .text('Top 10 Best Selling Products', { underline: true });
        doc.moveDown(0.5);
        const bestTableTop = doc.y;
        doc
            .fontSize(12)
            .fillColor('#ffffff')
            .rect(itemX - 5, bestTableTop - 2, 500, 20)
            .fill('#003366');
        doc.fillColor('#ffffff').text('Product Name', itemX, bestTableTop);
        doc.text('Quantity Sold', qtyX, bestTableTop);
        doc.moveDown();
        doc.fillColor('black');
        bestSelling.forEach((p, i) => {
            const y = bestTableTop + 25 + i * 20;
            doc.text(p.productName, itemX, y);
            doc.text(p.totalSold.toString(), qtyX, y);
        });
        doc.moveDown(2);
        const activeSuppliers = await this.getMostActiveSuppliers(date);
        doc
            .fontSize(16)
            .fillColor('#003366')
            .text('Most Active Suppliers', { underline: true });
        doc.moveDown(0.5);
        const suppliersTop = doc.y;
        doc
            .fontSize(12)
            .fillColor('#ffffff')
            .rect(itemX - 5, suppliersTop - 2, 500, 20)
            .fill('#003366');
        doc.fillColor('#ffffff').text('Supplier Name', itemX, suppliersTop);
        doc.text('Total Sold', qtyX, suppliersTop);
        doc.moveDown();
        doc.fillColor('black');
        activeSuppliers.forEach((s, i) => {
            const y = suppliersTop + 25 + i * 20;
            doc.text(s.supplierName, itemX, y);
            doc.text(s.totalSold.toString(), qtyX, y);
        });
        doc.moveDown(4);
        doc
            .fontSize(10)
            .fillColor('#999')
            .text('Generated by Stock Guard System', { align: 'center' });
        doc.end();
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(invoice_item_entity_1.InvoiceItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReportsService);
//# sourceMappingURL=reports.service.js.map