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
exports.InvoiceController = void 0;
const common_1 = require("@nestjs/common");
const invoice_service_1 = require("./invoice.service");
const create_invoice_dto_1 = require("./dto/create-invoice.dto");
const update_invoice_dto_1 = require("./dto/update-invoice.dto");
const roles_guard_1 = require("../auth/roles/roles.guard");
const roles_decorator_1 = require("../decorator/roles/roles.decorator");
const swagger_1 = require("@nestjs/swagger");
let InvoiceController = class InvoiceController {
    invoiceService;
    constructor(invoiceService) {
        this.invoiceService = invoiceService;
    }
    create(createInvoiceDto) {
        return this.invoiceService.create(createInvoiceDto);
    }
    findAll() {
        return this.invoiceService.findAll();
    }
    findOne(id) {
        return this.invoiceService.findOne(id);
    }
    update(id, updateInvoiceDto) {
        return this.invoiceService.update(id, updateInvoiceDto);
    }
    remove(id) {
        return this.invoiceService.remove(id);
    }
};
exports.InvoiceController = InvoiceController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('Admin', 'Storeman'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new invoice' }),
    (0, swagger_1.ApiBody)({ type: create_invoice_dto_1.CreateInvoiceDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Invoice successfully created' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ whitelist: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_invoice_dto_1.CreateInvoiceDto]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)('Admin', 'Seller', 'Storeman', 'Accountant'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all invoices' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of invoices retrieved successfully' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)('Admin', 'customer'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a single invoice by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Invoice ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Invoice retrieved successfully' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)('Admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an invoice by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Invoice ID' }),
    (0, swagger_1.ApiBody)({ type: update_invoice_dto_1.UpdateInvoiceDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Invoice updated successfully' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe({ whitelist: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_invoice_dto_1.UpdateInvoiceDto]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('Admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an invoice by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Invoice ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Invoice deleted successfully' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "remove", null);
exports.InvoiceController = InvoiceController = __decorate([
    (0, swagger_1.ApiTags)('Invoices'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Controller)('invoice'),
    __metadata("design:paramtypes", [invoice_service_1.InvoiceService])
], InvoiceController);
//# sourceMappingURL=invoice.controller.js.map