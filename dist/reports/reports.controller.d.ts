import { ReportsService } from './reports.service';
import type { Response } from 'express';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    getProfit(type: "day" | "month" | "year" | undefined, date: string): Promise<{
        profit: number;
    }>;
    quantityOfProductsSold(date?: string): Promise<{
        productName: any;
        totalSold: number;
    }[]>;
    bestSellingProducts(limit?: string, date?: string): Promise<{
        productName: any;
        totalSold: number;
    }[]>;
    mostActiveSuppliers(date?: string): Promise<{
        supplierName: any;
        totalSold: number;
    }[]>;
    exportFullReportPDF(date: string, res: Response): Promise<void>;
}
