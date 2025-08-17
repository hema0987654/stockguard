import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import type { VercelRequest, VercelResponse } from '@vercel/node';

let server: any;

async function createServer() {
  const app = await NestFactory.create(AppModule);

  // تفعيل CORS
  app.enableCors();

  // إعداد Swagger
  const config = new DocumentBuilder()
    .setTitle('Stock Guard API')
    .setDescription('API documentation for Stock Guard project')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  // تهيئة التطبيق للـ Serverless
  await app.init();

  // رجوع instance الخاص بالـ HTTP Adapter
  return app.getHttpAdapter().getInstance();
}

// handler لـ Vercel
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!server) {
    server = await createServer();
  }
  server(req, res);
}
