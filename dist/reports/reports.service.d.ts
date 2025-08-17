import { Repository } from 'typeorm';
import { InvoiceItem } from 'src/invoice-item/entities/invoice-item.entity';
import { Response } from 'express';
export declare class ReportsService {
    private readonly invoiceItemRepository;
    constructor(invoiceItemRepository: Repository<InvoiceItem>);
    getProfit(type: 'day' | 'month' | 'year', date: string): Promise<{
        profit: number;
    }>;
    getQuantityOfProductsSold(date?: string): Promise<{
        productName: any;
        totalSold: number;
    }[]>;
    getBestSellingProducts(limit?: number, date?: string): Promise<{
        productName: any;
        totalSold: number;
    }[]>;
    getMostActiveSuppliers(date?: string): Promise<{
        supplierName: any;
        totalSold: number;
    }[]>;
    exportFullReportPDF(date: string, res: Response): Promise<void>;
}
