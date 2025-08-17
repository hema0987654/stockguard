"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
let server;
async function createServer() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Stock Guard API')
        .setDescription('API documentation for Stock Guard project')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    await app.init();
    return app.getHttpAdapter().getInstance();
}
async function handler(req, res) {
    if (!server) {
        server = await createServer();
    }
    server(req, res);
}
//# sourceMappingURL=main.js.map