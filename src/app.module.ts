import { Module } from '@nestjs/common';
import { DataBaseModuleTsModule } from './database/typeorm.config/typeorm.config.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { SupplierModule } from './supplier/supplier.module';
import { InvoiceModule } from './invoice/invoice.module';
import { InvoiceItemModule } from './invoice-item/invoice-item.module';
import { AlertsModule } from './alerts/alerts.module';
import { ScheduleModule } from '@nestjs/schedule';
import { MailerModule } from '@nestjs-modules/mailer';
import { ReportsModule } from './reports/reports.module';
import { RoutmainController } from './routmain/routmain.controller';
import { RoutmainModule } from './routmain/routmain.module';


@Module({
  imports: [ScheduleModule.forRoot(),DataBaseModuleTsModule , AuthModule, ProductsModule, SupplierModule, InvoiceModule, InvoiceItemModule, AlertsModule,
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.ADMIN_EMAIL, 
          pass: process.env.EMAIL_PASSWORD, 
        },
      },
      defaults: {
        from: '"No Reply" <no-reply@example.com>'
      },
    }),
    ReportsModule,
    RoutmainModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
