import { Repository } from 'typeorm';
import { Alert } from './entities/alert.entity';
import { Product } from 'src/products/entities/product.entity';
import { MailerService } from '@nestjs-modules/mailer';
export declare class AlertsService {
    private readonly alertRepository;
    private readonly productRepository;
    private readonly mailerService;
    constructor(alertRepository: Repository<Alert>, productRepository: Repository<Product>, mailerService: MailerService);
    checkLowStock(): Promise<void>;
    findAll(): Promise<Alert[]>;
    markAsRead(id: number): Promise<{
        message: string;
    }>;
}
