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
exports.CreateAuthDto = void 0;
const class_validator_1 = require("class-validator");
const auth_entity_1 = require("../entities/auth.entity");
const swagger_1 = require("@nestjs/swagger");
class CreateAuthDto {
    fName;
    email;
    password;
    phoneNumber;
    role;
    address;
    profileImage;
    createdAt;
    updatedAt;
}
exports.CreateAuthDto = CreateAuthDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'First name of the user', example: 'John' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "fName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email address of the user', example: 'john@example.com' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Password for the account', example: 'Password123' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Phone number of the user', example: '+20123456789' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Role of the user', enum: auth_entity_1.UserRole, example: auth_entity_1.UserRole.ADMIN }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(Object.values(auth_entity_1.UserRole)),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'User address', example: '123 Main St, Cairo' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Profile image URL', example: 'https://example.com/avatar.png' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "profileImage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Creation date', example: '2025-08-13T18:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateAuthDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Last update date', example: '2025-08-13T18:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateAuthDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=create-auth.dto.js.map