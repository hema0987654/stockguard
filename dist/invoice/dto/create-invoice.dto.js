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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInvoiceDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const invoice_entity_1 = require("../entities/invoice.entity");
const create_invoice_item_dto_1 = require("../../invoice-item/dto/create-invoice-item.dto");
const swagger_1 = require("@nestjs/swagger");
class CreateInvoiceDto {
    type;
    totalAmount;
    invoiceItems;
}
exports.CreateInvoiceDto = CreateInvoiceDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Type of the invoice',
        enum: invoice_entity_1.InvoiceType,
        example: invoice_entity_1.InvoiceType.SALE,
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Invoice type is required' }),
    (0, class_validator_1.IsEnum)(invoice_entity_1.InvoiceType, { message: 'Type must be either purchase or sale' }),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Total amount of the invoice',
        example: 1500.75,
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Total amount is required' }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)({}, { message: 'Total amount must be a number' }),
    (0, class_validator_1.IsPositive)({ message: 'Total amount must be greater than zero' }),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of invoice items',
        type: [create_invoice_item_dto_1.CreateInvoiceItemDto],
        minItems: 1,
    }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_invoice_item_dto_1.CreateInvoiceItemDto),
    (0, class_validator_1.ArrayMinSize)(1, { message: 'Invoice must contain at least one item' }),
    __metadata("design:type", Array)
], CreateInvoiceDto.prototype, "invoiceItems", void 0);
//# sourceMappingURL=create-invoice.dto.js.map