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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const invoice_entity_1 = require("./entities/invoice.entity");
const product_entity_1 = require("../products/entities/product.entity");
const typeorm_3 = require("typeorm");
let InvoiceService = class InvoiceService {
    invoiceRepository;
    productRepository;
    constructor(invoiceRepository, productRepository) {
        this.invoiceRepository = invoiceRepository;
        this.productRepository = productRepository;
    }
    async create(createInvoiceDto) {
        const invoiceItems = createInvoiceDto.invoiceItems || [];
        const uniqueProductIds = [...new Set(invoiceItems.map(item => item.productId))];
        const foundProducts = await this.productRepository.findBy({
            id: (0, typeorm_3.In)(uniqueProductIds),
        });
        console.log('Found Products:', foundProducts);
        if (foundProducts.length !== uniqueProductIds.length) {
            throw new Error('One or more products not found');
        }
        for (const item of invoiceItems) {
            const product = foundProducts.find(p => p.id === item.productId);
            if (!product) {
                throw new Error(`Product with ID ${item.productId} not found`);
            }
            if (createInvoiceDto.type === 'purchase') {
                product.quantity += item.quantity;
            }
            else if (createInvoiceDto.type === 'sale') {
                if (product.quantity < item.quantity) {
                    throw new Error(`Insufficient quantity for product ID ${product.id}`);
                }
                product.quantity -= item.quantity;
            }
        }
        await this.productRepository.save(foundProducts);
        const invoice = this.invoiceRepository.create({
            type: createInvoiceDto.type,
            totalAmount: createInvoiceDto.totalAmount,
            invoiceItems: invoiceItems.map(item => ({
                product: { id: item.productId },
                quantity: item.quantity,
                unitPrice: item.unitPrice,
            })),
        });
        const savedInvoice = await this.invoiceRepository.save(invoice);
        return {
            message: 'Invoice created successfully',
            invoice: savedInvoice,
        };
    }
    async findAll() {
        const invoices = await this.invoiceRepository.find({
            relations: ['invoiceItems', 'createdBy'],
        });
        return { message: 'Invoices retrieved successfully', invoices };
    }
    async findOne(id) {
        const invoice = await this.invoiceRepository.findOne({
            where: { id },
            relations: ['invoiceItems', 'createdBy'],
        });
        if (!invoice) {
            throw new common_1.NotFoundException(`Invoice with ID ${id} not found`);
        }
        return { message: 'Invoice found successfully', invoice };
    }
    async update(id, updateInvoiceDto) {
        const invoice = await this.invoiceRepository.preload({
            id,
            ...updateInvoiceDto,
        });
        if (!invoice) {
            throw new common_1.NotFoundException(`Invoice with ID ${id} not found`);
        }
        const updatedInvoice = await this.invoiceRepository.save(invoice);
        return { message: 'Invoice updated successfully', invoice: updatedInvoice };
    }
    async remove(id) {
        const invoice = await this.invoiceRepository.findOneBy({ id });
        if (!invoice) {
            throw new common_1.NotFoundException(`Invoice with ID ${id} not found`);
        }
        await this.invoiceRepository.remove(invoice);
        return { message: `Invoice with ID ${id} deleted successfully` };
    }
};
exports.InvoiceService = InvoiceService;
exports.InvoiceService = InvoiceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(invoice_entity_1.Invoice)),
    __param(1, (0, typeorm_2.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], InvoiceService);
//# sourceMappingURL=invoice.service.js.map