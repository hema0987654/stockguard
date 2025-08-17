"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const serverless_express_1 = __importDefault(require("@vendia/serverless-express"));
const swagger_1 = require("@nestjs/swagger");
let server;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Stock Guard API')
        .setDescription('API documentation for Stock Guard project')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    await app.init();
    const expressApp = app.getHttpAdapter().getInstance();
    server = (0, serverless_express_1.default)({ app: expressApp });
}
bootstrap();
const handler = (event, context, callback) => {
    return server(event, context, callback);
};
exports.handler = handler;
//# sourceMappingURL=main.js.map