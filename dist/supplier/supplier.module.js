"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierModule = void 0;
const common_1 = require("@nestjs/common");
const supplier_service_1 = require("./supplier.service");
const supplier_controller_1 = require("./supplier.controller");
const typeorm_1 = require("@nestjs/typeorm");
const supplier_entity_1 = require("./entities/supplier.entity");
const jwt_1 = require("@nestjs/jwt");
const auth_middleware_1 = require("../middleware/auth/auth.middleware");
let SupplierModule = class SupplierModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes(supplier_controller_1.SupplierController);
    }
};
exports.SupplierModule = SupplierModule;
exports.SupplierModule = SupplierModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([supplier_entity_1.Supplier]),
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '1d' }
            })],
        controllers: [supplier_controller_1.SupplierController],
        providers: [supplier_service_1.SupplierService],
    })
], SupplierModule);
//# sourceMappingURL=supplier.module.js.map