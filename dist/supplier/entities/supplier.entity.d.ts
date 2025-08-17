import { Product } from '../../products/entities/product.entity';
export declare class Supplier {
    id: number;
    name: string;
    phone: string;
    address: string;
    email: string;
    products: Product[];
    createdAt: Date;
    updatedAt: Date;
}
