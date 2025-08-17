import { InvoiceItemService } from './invoice-item.service';
import { CreateInvoiceItemDto } from './dto/create-invoice-item.dto';
import { UpdateInvoiceItemDto } from './dto/update-invoice-item.dto';
export declare class InvoiceItemController {
    private readonly invoiceItemService;
    constructor(invoiceItemService: InvoiceItemService);
    create(createInvoiceItemDto: CreateInvoiceItemDto): Promise<{
        message: string;
        data: import("./entities/invoice-item.entity").InvoiceItem;
    }>;
    findAll(): Promise<{
        message: string;
        data: import("./entities/invoice-item.entity").InvoiceItem[];
    }>;
    findOne(id: string): Promise<{
        message: string;
        data: import("./entities/invoice-item.entity").InvoiceItem;
    }>;
    update(id: string, updateInvoiceItemDto: UpdateInvoiceItemDto): Promise<{
        message: string;
        data: import("./entities/invoice-item.entity").InvoiceItem;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
