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
exports.CreateSupplierDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateSupplierDto {
    name;
    phone;
    address;
    email;
}
exports.CreateSupplierDto = CreateSupplierDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the supplier',
        minLength: 3,
        maxLength: 100,
        example: 'ABC Supplies',
    }),
    (0, class_validator_1.IsString)({ message: 'Supplier name must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Supplier name is required' }),
    (0, class_validator_1.Length)(3, 100, { message: 'Supplier name must be between 3 and 100 characters' }),
    __metadata("design:type", String)
], CreateSupplierDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Egyptian phone number of the supplier',
        example: '01012345678',
    }),
    (0, class_validator_1.IsString)({ message: 'Phone number must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Phone number is required' }),
    (0, class_validator_1.Matches)(/^01[0-2,5]{1}[0-9]{8}$/, {
        message: 'Phone number must be a valid Egyptian number (e.g. 01012345678)',
    }),
    __metadata("design:type", String)
], CreateSupplierDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Address of the supplier',
        minLength: 5,
        maxLength: 200,
        example: '123 Nile St, Cairo, Egypt',
    }),
    (0, class_validator_1.IsString)({ message: 'Address must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Address is required' }),
    (0, class_validator_1.Length)(5, 200, { message: 'Address must be between 5 and 200 characters' }),
    __metadata("design:type", String)
], CreateSupplierDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email of the supplier',
        example: 'supplier@example.com',
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be a valid email address' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required' }),
    __metadata("design:type", String)
], CreateSupplierDto.prototype, "email", void 0);
//# sourceMappingURL=create-supplier.dto.js.map