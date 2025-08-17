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
exports.InvoiceItemService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const invoice_item_entity_1 = require("./entities/invoice-item.entity");
let InvoiceItemService = class InvoiceItemService {
    invoiceItemRepository;
    constructor(invoiceItemRepository) {
        this.invoiceItemRepository = invoiceItemRepository;
    }
    async create(createInvoiceItemDto) {
        const invoiceItem = this.invoiceItemRepository.create({
            quantity: createInvoiceItemDto.quantity,
            unitPrice: createInvoiceItemDto.unitPrice,
            product: { id: createInvoiceItemDto.productId },
            invoice: { id: createInvoiceItemDto.invoiceId },
        });
        const savedInvoiceItem = await this.invoiceItemRepository.save(invoiceItem);
        return {
            message: 'Invoice item created successfully',
            data: savedInvoiceItem,
        };
    }
    async findAll() {
        const items = await this.invoiceItemRepository.find({
            relations: ['invoice', 'product'],
        });
        return {
            message: 'Invoice items retrieved successfully',
            data: items,
        };
    }
    async findOne(id) {
        const invoiceItem = await this.invoiceItemRepository.findOne({
            where: { id },
            relations: ['invoice', 'product'],
        });
        if (!invoiceItem) {
            throw new common_1.NotFoundException(`Invoice item with id ${id} not found`);
        }
        return {
            message: 'Invoice item retrieved successfully',
            data: invoiceItem,
        };
    }
    async update(id, updateInvoiceItemDto) {
        const invoiceItem = await this.invoiceItemRepository.preload({
            id,
            ...updateInvoiceItemDto,
        });
        if (!invoiceItem) {
            throw new common_1.NotFoundException(`Invoice item with id ${id} not found`);
        }
        const updatedInvoiceItem = await this.invoiceItemRepository.save(invoiceItem);
        return {
            message: 'Invoice item updated successfully',
            data: updatedInvoiceItem,
        };
    }
    async remove(id) {
        const invoiceItem = await this.invoiceItemRepository.findOneBy({ id });
        if (!invoiceItem) {
            throw new common_1.NotFoundException(`Invoice item with id ${id} not found`);
        }
        await this.invoiceItemRepository.remove(invoiceItem);
        return {
            message: 'Invoice item removed successfully',
        };
    }
};
exports.InvoiceItemService = InvoiceItemService;
exports.InvoiceItemService = InvoiceItemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(invoice_item_entity_1.InvoiceItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InvoiceItemService);
//# sourceMappingURL=invoice-item.service.js.map