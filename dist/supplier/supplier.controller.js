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
exports.SupplierController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const supplier_service_1 = require("./supplier.service");
const create_supplier_dto_1 = require("./dto/create-supplier.dto");
const update_supplier_dto_1 = require("./dto/update-supplier.dto");
const roles_decorator_1 = require("../decorator/roles/roles.decorator");
const roles_guard_1 = require("../auth/roles/roles.guard");
let SupplierController = class SupplierController {
    supplierService;
    constructor(supplierService) {
        this.supplierService = supplierService;
    }
    create(createSupplierDto) {
        return this.supplierService.create(createSupplierDto);
    }
    findAll() {
        return this.supplierService.findAll();
    }
    findOne(id) {
        return this.supplierService.findOne(id);
    }
    update(id, dto) {
        return this.supplierService.update(id, dto);
    }
    remove(id) {
        return this.supplierService.remove(id);
    }
};
exports.SupplierController = SupplierController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('Admin', 'Storeman'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new supplier' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Supplier created successfully.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_supplier_dto_1.CreateSupplierDto]),
    __metadata("design:returntype", void 0)
], SupplierController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)('Admin', 'Seller', 'Storeman', 'Accountant'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all suppliers' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all suppliers.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SupplierController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)('Admin', 'Seller', 'Storeman', 'Accountant'),
    (0, swagger_1.ApiOperation)({ summary: 'Get supplier by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Supplier ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Supplier found.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SupplierController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)('Admin', 'Storeman'),
    (0, swagger_1.ApiOperation)({ summary: 'Update supplier by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Supplier ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Supplier updated successfully.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_supplier_dto_1.UpdateSupplierDto]),
    __metadata("design:returntype", void 0)
], SupplierController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('Admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete supplier by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Supplier ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Supplier deleted successfully.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SupplierController.prototype, "remove", null);
exports.SupplierController = SupplierController = __decorate([
    (0, swagger_1.ApiTags)('Suppliers'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('suppliers'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __metadata("design:paramtypes", [supplier_service_1.SupplierService])
], SupplierController);
//# sourceMappingURL=supplier.controller.js.map