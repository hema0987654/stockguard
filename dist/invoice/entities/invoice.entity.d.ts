import { User } from '../../auth/entities/auth.entity';
import { InvoiceItem } from 'src/invoice-item/entities/invoice-item.entity';
export declare enum InvoiceType {
    PURCHASE = "purchase",
    SALE = "sale"
}
export declare class Invoice {
    id: number;
    type: InvoiceType;
    totalAmount: number;
    invoiceItems: InvoiceItem[];
    createdAt: Date;
    updatedAt: Date;
    createdBy?: User;
}
