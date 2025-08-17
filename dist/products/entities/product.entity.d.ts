import { Alert } from 'src/alerts/entities/alert.entity';
import { InvoiceItem } from '../../invoice-item/entities/invoice-item.entity';
import { Supplier } from '../../supplier/entities/supplier.entity';
export declare class Product {
    id: number;
    name: string;
    sku: string;
    buyPrice: number;
    sellPrice: number;
    quantity: number;
    minQuantity: number;
    supplier: Supplier;
    invoiceItems: InvoiceItem[];
    alerts: Alert[];
    createdAt: Date;
    updatedAt: Date;
}
