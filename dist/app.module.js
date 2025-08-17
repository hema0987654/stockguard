"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_config_module_1 = require("./database/typeorm.config/typeorm.config.module");
const auth_module_1 = require("./auth/auth.module");
const products_module_1 = require("./products/products.module");
const supplier_module_1 = require("./supplier/supplier.module");
const invoice_module_1 = require("./invoice/invoice.module");
const invoice_item_module_1 = require("./invoice-item/invoice-item.module");
const alerts_module_1 = require("./alerts/alerts.module");
const schedule_1 = require("@nestjs/schedule");
const mailer_1 = require("@nestjs-modules/mailer");
const reports_module_1 = require("./reports/reports.module");
const routmain_module_1 = require("./routmain/routmain.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [schedule_1.ScheduleModule.forRoot(), typeorm_config_module_1.DataBaseModuleTsModule, auth_module_1.AuthModule, products_module_1.ProductsModule, supplier_module_1.SupplierModule, invoice_module_1.InvoiceModule, invoice_item_module_1.InvoiceItemModule, alerts_module_1.AlertsModule,
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: process.env.ADMIN_EMAIL,
                        pass: process.env.EMAIL_PASSWORD,
                    },
                },
                defaults: {
                    from: '"No Reply" <no-reply@example.com>'
                },
            }),
            reports_module_1.ReportsModule,
            routmain_module_1.RoutmainModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map