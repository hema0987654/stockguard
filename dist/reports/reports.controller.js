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
exports.ReportsController = void 0;
const common_1 = require("@nestjs/common");
const reports_service_1 = require("./reports.service");
const swagger_1 = require("@nestjs/swagger");
let ReportsController = class ReportsController {
    reportsService;
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    async getProfit(type = 'day', date) {
        return this.reportsService.getProfit(type, date);
    }
    async quantityOfProductsSold(date) {
        return this.reportsService.getQuantityOfProductsSold(date);
    }
    async bestSellingProducts(limit, date) {
        const limitNumber = limit ? parseInt(limit) : 10;
        return this.reportsService.getBestSellingProducts(limitNumber, date);
    }
    async mostActiveSuppliers(date) {
        return this.reportsService.getMostActiveSuppliers(date);
    }
    async exportFullReportPDF(date, res) {
        return this.reportsService.exportFullReportPDF(date, res);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)('profit'),
    (0, swagger_1.ApiOperation)({ summary: 'Get profit for a day, month, or year' }),
    (0, swagger_1.ApiQuery)({ name: 'type', enum: ['day', 'month', 'year'], required: false, description: 'Type of profit report' }),
    (0, swagger_1.ApiQuery)({ name: 'date', required: true, description: 'Date in YYYY-MM-DD format' }),
    __param(0, (0, common_1.Query)('type')),
    __param(1, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "getProfit", null);
__decorate([
    (0, common_1.Get)('quantity-sold'),
    (0, swagger_1.ApiOperation)({ summary: 'Get quantity of sold products' }),
    (0, swagger_1.ApiQuery)({ name: 'date', required: false, description: 'Optional date to filter results' }),
    __param(0, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "quantityOfProductsSold", null);
__decorate([
    (0, common_1.Get)('best-selling'),
    (0, swagger_1.ApiOperation)({ summary: 'Get top selling products' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Number of top products to return' }),
    (0, swagger_1.ApiQuery)({ name: 'date', required: false, description: 'Optional date to filter results' }),
    __param(0, (0, common_1.Query)('limit')),
    __param(1, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "bestSellingProducts", null);
__decorate([
    (0, common_1.Get)('active-suppliers'),
    (0, swagger_1.ApiOperation)({ summary: 'Get most active suppliers' }),
    (0, swagger_1.ApiQuery)({ name: 'date', required: false, description: 'Optional date to filter results' }),
    __param(0, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "mostActiveSuppliers", null);
__decorate([
    (0, common_1.Get)('export-full-pdf'),
    (0, swagger_1.ApiOperation)({ summary: 'Export full report as PDF' }),
    (0, swagger_1.ApiQuery)({ name: 'date', required: true, description: 'Date for the report in YYYY-MM-DD format' }),
    __param(0, (0, common_1.Query)('date')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ReportsController.prototype, "exportFullReportPDF", null);
exports.ReportsController = ReportsController = __decorate([
    (0, swagger_1.ApiTags)('Reports'),
    (0, common_1.Controller)('reports'),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
//# sourceMappingURL=reports.controller.js.map