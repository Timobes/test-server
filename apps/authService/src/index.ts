import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';
import fastify from 'fastify';
import { swaggerConfig, swaggerUIConfig } from './config/apiDocConfig';
import { devLoggers, loggers } from './config/loggerConfig';
import { authRouter } from './routers/auth.router';

// Если вкл то в консоли цветные логи, если выкл в консоли нет вывода, всё в файл
let isDev = true;

export const app = fastify({
  loggerInstance: isDev ? devLoggers : loggers,

  ajv: {
    customOptions: {
      // Отключаем автомат приведении типов
      coerceTypes: false
    }
  }
});

app.register(swagger, swaggerConfig);
app.register(swaggerUI, swaggerUIConfig);

app.register(authRouter, { prefix: "/api/v1" })

app.get('/api/test', async (request, reply) => {
  reply.send({ test: 'text', message: 'work!' });
});

app.ready();

async function start() {
  app.listen({ port: 8001, host: "0.0.0.0" }, function (err, address) {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }

    console.log(`Server is running at ${address}`);
  });
}

start();
