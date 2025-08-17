import { InvoiceType } from '../entities/invoice.entity';
import { CreateInvoiceItemDto } from 'src/invoice-item/dto/create-invoice-item.dto';
export declare class CreateInvoiceDto {
    readonly type: InvoiceType;
    readonly totalAmount: number;
    readonly invoiceItems: CreateInvoiceItemDto[];
}
