import { Repository } from 'typeorm';
import { CreateInvoiceItemDto } from './dto/create-invoice-item.dto';
import { UpdateInvoiceItemDto } from './dto/update-invoice-item.dto';
import { InvoiceItem } from './entities/invoice-item.entity';
export declare class InvoiceItemService {
    private readonly invoiceItemRepository;
    constructor(invoiceItemRepository: Repository<InvoiceItem>);
    create(createInvoiceItemDto: CreateInvoiceItemDto): Promise<{
        message: string;
        data: InvoiceItem;
    }>;
    findAll(): Promise<{
        message: string;
        data: InvoiceItem[];
    }>;
    findOne(id: number): Promise<{
        message: string;
        data: InvoiceItem;
    }>;
    update(id: number, updateInvoiceItemDto: UpdateInvoiceItemDto): Promise<{
        message: string;
        data: InvoiceItem;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
