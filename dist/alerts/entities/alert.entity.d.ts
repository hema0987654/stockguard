import { Product } from 'src/products/entities/product.entity';
export declare enum AlertType {
    LOW_STOCK = "low_stock",
    OUT_OF_STOCK = "out_of_stock"
}
export declare class Alert {
    id: number;
    product: Product;
    type: AlertType;
    message: string;
    createdAt: Date;
    isRead: boolean;
}
