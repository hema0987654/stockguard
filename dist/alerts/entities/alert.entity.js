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
exports.Alert = exports.AlertType = void 0;
const product_entity_1 = require("../../products/entities/product.entity");
const typeorm_1 = require("typeorm");
var AlertType;
(function (AlertType) {
    AlertType["LOW_STOCK"] = "low_stock";
    AlertType["OUT_OF_STOCK"] = "out_of_stock";
})(AlertType || (exports.AlertType = AlertType = {}));
let Alert = class Alert {
    id;
    product;
    type;
    message;
    createdAt;
    isRead;
};
exports.Alert = Alert;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Alert.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.alerts, {
        eager: false,
        onDelete: 'CASCADE',
        nullable: false
    }),
    __metadata("design:type", product_entity_1.Product)
], Alert.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: AlertType,
        default: AlertType.LOW_STOCK
    }),
    __metadata("design:type", String)
], Alert.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Alert.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamp' }),
    __metadata("design:type", Date)
], Alert.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Boolean)
], Alert.prototype, "isRead", void 0);
exports.Alert = Alert = __decorate([
    (0, typeorm_1.Entity)('alerts')
], Alert);
//# sourceMappingURL=alert.entity.js.map