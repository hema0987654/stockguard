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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertsService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const alert_entity_1 = require("./entities/alert.entity");
const product_entity_1 = require("../products/entities/product.entity");
const mailer_1 = require("@nestjs-modules/mailer");
let AlertsService = class AlertsService {
    alertRepository;
    productRepository;
    mailerService;
    constructor(alertRepository, productRepository, mailerService) {
        this.alertRepository = alertRepository;
        this.productRepository = productRepository;
        this.mailerService = mailerService;
    }
    async checkLowStock() {
        const products = await this.productRepository.find();
        for (const product of products) {
            if (product.quantity <= product.minQuantity) {
                const existingAlert = await this.alertRepository.findOne({
                    where: {
                        product: { id: product.id },
                        type: product.quantity === 0
                            ? alert_entity_1.AlertType.OUT_OF_STOCK
                            : alert_entity_1.AlertType.LOW_STOCK,
                        isRead: false,
                    },
                    relations: ['product'],
                });
                if (existingAlert) {
                    console.log(`⚠️ Alert already exists for product ${product.name}: ${existingAlert.type}`);
                    continue;
                }
                const alert = this.alertRepository.create({
                    product,
                    type: product.quantity === 0
                        ? alert_entity_1.AlertType.OUT_OF_STOCK
                        : alert_entity_1.AlertType.LOW_STOCK,
                    message: product.quantity === 0
                        ? `Product ${product.name} is out of stock`
                        : `Product ${product.name} is low on stock`,
                });
                await this.alertRepository.save(alert);
                console.log(`✅ Alert created for product ${product.name}: ${alert.type}`);
                await this.mailerService.sendMail({
                    to: 'ibrihem54321@gmail.com',
                    subject: `🚨 ${alert.type === alert_entity_1.AlertType.OUT_OF_STOCK ? 'Out of Stock' : 'Low Stock'} Alert - ${product.name}`,
                    html: `
  <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
    <div style="max-width: 500px; margin: auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); padding: 20px;">
      <div style="text-align: center;">
        <img src="https://img.icons8.com/color/96/${alert.type === alert_entity_1.AlertType.OUT_OF_STOCK ? 'delete-sign' : 'low-priority'}.png" alt="alert-icon" style="margin-bottom: 10px;" />
        <h2 style="color: ${alert.type === alert_entity_1.AlertType.OUT_OF_STOCK ? '#e74c3c' : '#f39c12'}; margin-bottom: 5px;">
          ${alert.type === alert_entity_1.AlertType.OUT_OF_STOCK ? 'Out of Stock' : 'Low Stock'} Alert
        </h2>
        <p style="font-size: 14px; color: #7f8c8d;">An important inventory update from your system</p>
      </div>
      
      <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />

      <p style="font-size: 16px; color: #2c3e50;">
        ${alert.message}
      </p>

      <div style="background-color: #f4f6f7; padding: 10px; border-radius: 8px; margin-top: 15px;">
        <p style="margin: 0; font-size: 14px;">
          📦 <strong>Product:</strong> ${product.name}<br/>
          📊 <strong>Quantity:</strong> ${product.quantity}<br/>
          🎯 <strong>Minimum Required:</strong> ${product.minQuantity}
        </p>
      </div>

      <div style="text-align: center; margin-top: 20px;">
        <a href="https://your-admin-dashboard-link.com" style="display: inline-block; background-color: ${alert.type === alert_entity_1.AlertType.OUT_OF_STOCK ? '#e74c3c' : '#f39c12'}; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
          View in Dashboard
        </a>
      </div>

      <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
      <small style="display: block; text-align: center; color: #95a5a6;">
        This is an automated message. Please do not reply.
      </small>
    </div>
  </div>
  `,
                });
            }
        }
    }
    async findAll() {
        return await this.alertRepository.find({
            relations: ['product'],
        });
    }
    async markAsRead(id) {
        await this.alertRepository.update(id, { isRead: true });
        return { message: `Alert with id ${id} marked as read` };
    }
};
exports.AlertsService = AlertsService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_12_HOURS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlertsService.prototype, "checkLowStock", null);
exports.AlertsService = AlertsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(alert_entity_1.Alert)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        mailer_1.MailerService])
], AlertsService);
//# sourceMappingURL=alerts.service.js.map