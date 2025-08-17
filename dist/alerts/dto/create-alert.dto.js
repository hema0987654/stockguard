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
exports.CreateAlertDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const alert_entity_1 = require("../entities/alert.entity");
class CreateAlertDto {
    productId;
    type;
    message;
}
exports.CreateAlertDto = CreateAlertDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID of the product related to the alert',
        example: 1,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateAlertDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Type of the alert',
        enum: alert_entity_1.AlertType,
        example: alert_entity_1.AlertType.LOW_STOCK,
    }),
    (0, class_validator_1.IsEnum)(alert_entity_1.AlertType, { message: 'type must be either low_stock or out_of_stock' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAlertDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Optional custom message for the alert',
        example: 'Stock is running low for this product',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAlertDto.prototype, "message", void 0);
//# sourceMappingURL=create-alert.dto.js.map