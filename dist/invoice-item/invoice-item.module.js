"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceItemModule = void 0;
const common_1 = require("@nestjs/common");
const invoice_item_service_1 = require("./invoice-item.service");
const invoice_item_controller_1 = require("./invoice-item.controller");
const typeorm_1 = require("@nestjs/typeorm");
const invoice_item_entity_1 = require("./entities/invoice-item.entity");
const auth_module_1 = require("../auth/auth.module");
const jwt_1 = require("@nestjs/jwt");
const auth_middleware_1 = require("../middleware/auth/auth.middleware");
let InvoiceItemModule = class InvoiceItemModule {
    configure(consumer) {
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .forRoutes(invoice_item_controller_1.InvoiceItemController);
    }
};
exports.InvoiceItemModule = InvoiceItemModule;
exports.InvoiceItemModule = InvoiceItemModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([invoice_item_entity_1.InvoiceItem]),
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '1h' }
            }),
            auth_module_1.AuthModule],
        exports: [invoice_item_service_1.InvoiceItemService],
        controllers: [invoice_item_controller_1.InvoiceItemController],
        providers: [invoice_item_service_1.InvoiceItemService],
    })
], InvoiceItemModule);
//# sourceMappingURL=invoice-item.module.js.map