import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { Supplier } from 'src/supplier/entities/supplier.entity';
export declare class ProductsService {
    private readonly productRepository;
    private readonly supplierRepository;
    constructor(productRepository: Repository<Product>, supplierRepository: Repository<Supplier>);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(params?: {
        filters?: {
            minPrice?: number;
            maxPrice?: number;
            minQuantity?: number;
            maxQuantity?: number;
        };
        sortBy?: 'sellPrice' | 'quantity' | 'name';
        order?: 'ASC' | 'DESC';
        page?: number;
        limit?: number;
    }): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<Product>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
