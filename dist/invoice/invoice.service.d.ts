import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { Repository } from 'typeorm';
import { Invoice } from './entities/invoice.entity';
import { Product } from 'src/products/entities/product.entity';
export declare class InvoiceService {
    private readonly invoiceRepository;
    private readonly productRepository;
    constructor(invoiceRepository: Repository<Invoice>, productRepository: Repository<Product>);
    create(createInvoiceDto: CreateInvoiceDto): Promise<{
        message: string;
        invoice: Invoice;
    }>;
    findAll(): Promise<{
        message: string;
        invoices: Invoice[];
    }>;
    findOne(id: number): Promise<{
        message: string;
        invoice: Invoice;
    }>;
    update(id: number, updateInvoiceDto: UpdateInvoiceDto): Promise<{
        message: string;
        invoice: Invoice;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
