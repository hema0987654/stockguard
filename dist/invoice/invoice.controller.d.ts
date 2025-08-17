import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
export declare class InvoiceController {
    private readonly invoiceService;
    constructor(invoiceService: InvoiceService);
    create(createInvoiceDto: CreateInvoiceDto): Promise<{
        message: string;
        invoice: import("./entities/invoice.entity").Invoice;
    }>;
    findAll(): Promise<{
        message: string;
        invoices: import("./entities/invoice.entity").Invoice[];
    }>;
    findOne(id: number): Promise<{
        message: string;
        invoice: import("./entities/invoice.entity").Invoice;
    }>;
    update(id: number, updateInvoiceDto: UpdateInvoiceDto): Promise<{
        message: string;
        invoice: import("./entities/invoice.entity").Invoice;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
