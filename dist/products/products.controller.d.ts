import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<import("./entities/product.entity").Product>;
    getProducts(minPrice?: string, maxPrice?: string, minQuantity?: string, maxQuantity?: string, sortBy?: 'sellPrice' | 'quantity' | 'name', order?: 'ASC' | 'DESC', page?: string, limit?: string): Promise<{
        message: string;
        data: import("./entities/product.entity").Product[];
    }>;
    findOne(id: string): Promise<import("./entities/product.entity").Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import("./entities/product.entity").Product>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
