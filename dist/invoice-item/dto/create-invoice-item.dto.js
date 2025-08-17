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
exports.CreateInvoiceItemDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class CreateInvoiceItemDto {
    invoiceId;
    productId;
    quantity;
    unitPrice;
}
exports.CreateInvoiceItemDto = CreateInvoiceItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Invoice ID', example: 1 }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)({ message: 'invoiceId must be an integer' }),
    __metadata("design:type", Number)
], CreateInvoiceItemDto.prototype, "invoiceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product ID', example: 1 }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)({ message: 'productId must be an integer' }),
    __metadata("design:type", Number)
], CreateInvoiceItemDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quantity of product', minimum: 1, example: 10 }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)({ message: 'quantity must be an integer' }),
    (0, class_validator_1.Min)(1, { message: 'quantity must be at least 1' }),
    __metadata("design:type", Number)
], CreateInvoiceItemDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unit price of product', minimum: 0, example: 50.5 }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }, { message: 'unitPrice must be a number with up to 2 decimal places' }),
    (0, class_validator_1.Min)(0, { message: 'unitPrice must be at least 0' }),
    __metadata("design:type", Number)
], CreateInvoiceItemDto.prototype, "unitPrice", void 0);
//# sourceMappingURL=create-invoice-item.dto.js.map