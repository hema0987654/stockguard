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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
const supplier_entity_1 = require("../supplier/entities/supplier.entity");
let ProductsService = class ProductsService {
    productRepository;
    supplierRepository;
    constructor(productRepository, supplierRepository) {
        this.productRepository = productRepository;
        this.supplierRepository = supplierRepository;
    }
    async create(createProductDto) {
        const supplier = await this.supplierRepository.findOne({
            where: { id: createProductDto.supplierId },
        });
        if (!supplier) {
            throw new common_1.NotFoundException('Supplier not found');
        }
        const product = this.productRepository.create({
            name: createProductDto.name,
            sku: createProductDto.sku,
            buyPrice: createProductDto.buyPrice,
            sellPrice: createProductDto.sellPrice,
            quantity: createProductDto.quantity,
            minQuantity: createProductDto.minQuantity,
            supplier
        });
        return await this.productRepository.save(product);
    }
    async findAll(params) {
        const qb = this.productRepository.createQueryBuilder('product')
            .leftJoinAndSelect('product.supplier', 'supplier');
        if (params?.filters) {
            const { minPrice, maxPrice, minQuantity, maxQuantity } = params.filters;
            if (minPrice !== undefined)
                qb.andWhere('product.sellPrice >= :minPrice', { minPrice });
            if (maxPrice !== undefined)
                qb.andWhere('product.sellPrice <= :maxPrice', { maxPrice });
            if (minQuantity !== undefined)
                qb.andWhere('product.quantity >= :minQuantity', { minQuantity });
            if (maxQuantity !== undefined)
                qb.andWhere('product.quantity <= :maxQuantity', { maxQuantity });
        }
        if (params?.sortBy) {
            qb.orderBy(`product.${params.sortBy}`, params.order || 'ASC');
        }
        const page = params?.page || 1;
        const limit = params?.limit || 10;
        qb.skip((page - 1) * limit).take(limit);
        return qb.getMany();
    }
    async findOne(id) {
        const product = await this.productRepository.findOne({
            where: { id },
            relations: ['supplier', 'invoiceItems'],
        });
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }
    async update(id, updateProductDto) {
        const updatedProduct = await this.productRepository.preload({
            id,
            ...updateProductDto,
        });
        if (!updatedProduct) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        await this.productRepository.save(updatedProduct);
        return updatedProduct;
    }
    async remove(id) {
        const product = await this.findOne(id);
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        await this.productRepository.remove(product);
        return { message: `Product with ID ${id} deleted successfully` };
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(supplier_entity_1.Supplier)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductsService);
//# sourceMappingURL=products.service.js.map