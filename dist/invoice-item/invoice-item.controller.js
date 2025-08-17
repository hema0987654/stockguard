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
exports.InvoiceItemController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const invoice_item_service_1 = require("./invoice-item.service");
const create_invoice_item_dto_1 = require("./dto/create-invoice-item.dto");
const update_invoice_item_dto_1 = require("./dto/update-invoice-item.dto");
const roles_guard_1 = require("../auth/roles/roles.guard");
const roles_decorator_1 = require("../decorator/roles/roles.decorator");
let InvoiceItemController = class InvoiceItemController {
    invoiceItemService;
    constructor(invoiceItemService) {
        this.invoiceItemService = invoiceItemService;
    }
    create(createInvoiceItemDto) {
        return this.invoiceItemService.create(createInvoiceItemDto);
    }
    findAll() {
        return this.invoiceItemService.findAll();
    }
    findOne(id) {
        return this.invoiceItemService.findOne(+id);
    }
    update(id, updateInvoiceItemDto) {
        return this.invoiceItemService.update(+id, updateInvoiceItemDto);
    }
    remove(id) {
        return this.invoiceItemService.remove(+id);
    }
};
exports.InvoiceItemController = InvoiceItemController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('Admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new invoice item' }),
    (0, swagger_1.ApiBody)({ type: create_invoice_item_dto_1.CreateInvoiceItemDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Invoice item created successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_invoice_item_dto_1.CreateInvoiceItemDto]),
    __metadata("design:returntype", void 0)
], InvoiceItemController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)('Admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all invoice items' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InvoiceItemController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)('Admin', 'customer'),
    (0, swagger_1.ApiOperation)({ summary: 'Get an invoice item by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InvoiceItemController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)('Admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an invoice item by ID' }),
    (0, swagger_1.ApiBody)({ type: update_invoice_item_dto_1.UpdateInvoiceItemDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_invoice_item_dto_1.UpdateInvoiceItemDto]),
    __metadata("design:returntype", void 0)
], InvoiceItemController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('Admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an invoice item by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InvoiceItemController.prototype, "remove", null);
exports.InvoiceItemController = InvoiceItemController = __decorate([
    (0, swagger_1.ApiTags)('Invoice Items'),
    (0, common_1.Controller)('invoice-item'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __metadata("design:paramtypes", [invoice_item_service_1.InvoiceItemService])
], InvoiceItemController);
//# sourceMappingURL=invoice-item.controller.js.map