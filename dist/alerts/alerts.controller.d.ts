import { AlertsService } from './alerts.service';
export declare class AlertsController {
    private readonly alertsService;
    constructor(alertsService: AlertsService);
    findAll(): Promise<import("./entities/alert.entity").Alert[]>;
    markAsRead(id: string): Promise<{
        message: string;
    }>;
}
