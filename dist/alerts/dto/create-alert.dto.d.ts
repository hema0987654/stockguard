import { AlertType } from '../entities/alert.entity';
export declare class CreateAlertDto {
    productId: number;
    type: AlertType;
    message?: string;
}
