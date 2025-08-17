import { Invoice } from '../../invoice/entities/invoice.entity';
import { Product } from '../../products/entities/product.entity';
export declare class InvoiceItem {
    id: number;
    invoice: Invoice;
    product: Product;
    quantity: number;
    unitPrice: number;
    createdAt: Date;
}
