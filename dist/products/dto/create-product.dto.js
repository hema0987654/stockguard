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
exports.CreateProductDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateProductDto {
    name;
    sku;
    buyPrice;
    sellPrice;
    quantity;
    minQuantity;
    supplierId;
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product name' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Product name is required' }),
    (0, class_validator_1.IsString)({ message: 'Product name must be a string' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'SKU code of the product' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'SKU is required' }),
    (0, class_validator_1.IsString)({ message: 'SKU must be a string' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "sku", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Buy price of the product', minimum: 0 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Buy price is required' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Buy price must be a number' }),
    (0, class_validator_1.IsPositive)({ message: 'Buy price must be a positive number' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "buyPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sell price of the product', minimum: 0 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Sell price is required' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Sell price must be a number' }),
    (0, class_validator_1.IsPositive)({ message: 'Sell price must be a positive number' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "sellPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quantity in stock', minimum: 0 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Quantity is required' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Quantity must be a number' }),
    (0, class_validator_1.Min)(0, { message: 'Quantity must be at least 0' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Minimum quantity to maintain in stock', minimum: 0 }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Minimum quantity is required' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Minimum quantity must be a number' }),
    (0, class_validator_1.Min)(0, { message: 'Minimum quantity must be at least 0' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "minQuantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Supplier ID' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Supplier ID is required' }),
    (0, class_validator_1.IsInt)({ message: 'Supplier ID must be an integer' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "supplierId", void 0);
//# sourceMappingURL=create-product.dto.js.map