import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { AuthMiddleware } from 'src/middleware/auth/auth.middleware';
import { RolesGuard } from '../auth/roles/roles.guard'; // Make sure this path is correct
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { JwtModule } from '@nestjs/jwt';
import { Supplier } from 'src/supplier/entities/supplier.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Supplier]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ], // Add your entities here
  controllers: [ProductsController],
  providers: [ProductsService, RolesGuard],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(ProductsController);
  }
}
