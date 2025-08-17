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
exports.Product = void 0;
const alert_entity_1 = require("../../alerts/entities/alert.entity");
const invoice_item_entity_1 = require("../../invoice-item/entities/invoice-item.entity");
const supplier_entity_1 = require("../../supplier/entities/supplier.entity");
const typeorm_1 = require("typeorm");
let Product = class Product {
    id;
    name;
    sku;
    buyPrice;
    sellPrice;
    quantity;
    minQuantity;
    supplier;
    invoiceItems;
    alerts;
    createdAt;
    updatedAt;
};
exports.Product = Product;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, unique: true }),
    __metadata("design:type", String)
], Product.prototype, "sku", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'buy_price', type: 'float' }),
    __metadata("design:type", Number)
], Product.prototype, "buyPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sell_price', type: 'float' }),
    __metadata("design:type", Number)
], Product.prototype, "sellPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Product.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'min_quantity', type: 'int', default: 5 }),
    __metadata("design:type", Number)
], Product.prototype, "minQuantity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => supplier_entity_1.Supplier, (supplier) => supplier.products, { eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'supplier_id' }),
    __metadata("design:type", supplier_entity_1.Supplier)
], Product.prototype, "supplier", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => invoice_item_entity_1.InvoiceItem, (invoiceItem) => invoiceItem.product),
    __metadata("design:type", Array)
], Product.prototype, "invoiceItems", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => alert_entity_1.Alert, (alert) => alert.product),
    __metadata("design:type", Array)
], Product.prototype, "alerts", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamp' }),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamp' }),
    __metadata("design:type", Date)
], Product.prototype, "updatedAt", void 0);
exports.Product = Product = __decorate([
    (0, typeorm_1.Entity)('products')
], Product);
//# sourceMappingURL=product.entity.js.map