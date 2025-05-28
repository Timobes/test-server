"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const fastify_1 = __importDefault(require("fastify"));
const apiDocConfig_1 = require("./config/apiDocConfig");
const loggerConfig_1 = require("./config/loggerConfig");
const gateway_router_1 = require("./routers/gateway.router");
// Если вкл то в консоли цветные логи, если выкл в консоли нет вывода, всё в файл
let isDev = true;
exports.app = (0, fastify_1.default)({
    loggerInstance: isDev ? loggerConfig_1.devLoggers : loggerConfig_1.loggers,
    ajv: {
        customOptions: {
            // Отключаем автомат приведении типов
            coerceTypes: false
        }
    }
});
exports.app.register(swagger_1.default, apiDocConfig_1.swaggerConfig);
exports.app.register(swagger_ui_1.default, apiDocConfig_1.swaggerUIConfig);
exports.app.register(gateway_router_1.mainRouter, { prefix: "/api/v1" });
exports.app.get('/api/test', async (request, reply) => {
    reply.send({ test: 'text', message: 'work!' });
});
exports.app.ready();
async function start() {
    exports.app.listen({ port: 8080, host: "0.0.0.0" }, function (err, address) {
        if (err) {
            exports.app.log.error(err);
            process.exit(1);
        }
        console.log(`Server is running at ${address}`);
    });
}
start();
