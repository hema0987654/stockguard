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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const products_service_1 = require("./products.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const roles_decorator_1 = require("../decorator/roles/roles.decorator");
const roles_guard_1 = require("../auth/roles/roles.guard");
let ProductsController = class ProductsController {
    productsService;
    constructor(productsService) {
        this.productsService = productsService;
    }
    create(createProductDto) {
        return this.productsService.create(createProductDto);
    }
    async getProducts(minPrice, maxPrice, minQuantity, maxQuantity, sortBy, order, page, limit) {
        const filters = {
            minPrice: minPrice ? Number(minPrice) : undefined,
            maxPrice: maxPrice ? Number(maxPrice) : undefined,
            minQuantity: minQuantity ? Number(minQuantity) : undefined,
            maxQuantity: maxQuantity ? Number(maxQuantity) : undefined,
        };
        const products = await this.productsService.findAll({
            filters,
            sortBy,
            order,
            page: page ? Number(page) : undefined,
            limit: limit ? Number(limit) : undefined,
        });
        return { message: 'Products retrieved successfully', data: products };
    }
    findOne(id) {
        return this.productsService.findOne(+id);
    }
    update(id, updateProductDto) {
        return this.productsService.update(+id, updateProductDto);
    }
    remove(id) {
        return this.productsService.remove(+id);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('Admin', 'Storeman'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new product' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Product created successfully.' }),
    (0, swagger_1.ApiBody)({ type: create_product_dto_1.CreateProductDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)('Admin', 'Seller', 'Storeman', 'Accountant'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get all products with optional filters' }),
    (0, swagger_1.ApiQuery)({ name: 'minPrice', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'maxPrice', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'minQuantity', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'maxQuantity', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'sortBy', enum: ['sellPrice', 'quantity', 'name'], required: false }),
    (0, swagger_1.ApiQuery)({ name: 'order', enum: ['ASC', 'DESC'], required: false }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false }),
    __param(0, (0, common_1.Query)('minPrice')),
    __param(1, (0, common_1.Query)('maxPrice')),
    __param(2, (0, common_1.Query)('minQuantity')),
    __param(3, (0, common_1.Query)('maxQuantity')),
    __param(4, (0, common_1.Query)('sortBy')),
    __param(5, (0, common_1.Query)('order')),
    __param(6, (0, common_1.Query)('page')),
    __param(7, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)('Admin', 'Seller', 'Storeman', 'Accountant'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get product by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)('Admin', 'Storeman'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update product by ID' }),
    (0, swagger_1.ApiBody)({ type: update_product_dto_1.UpdateProductDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('Admin'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete product by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "remove", null);
exports.ProductsController = ProductsController = __decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map