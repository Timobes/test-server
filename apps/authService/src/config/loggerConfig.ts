import pino from 'pino';

export const loggers = pino(
  {
    level: 'trace',
  },
  pino.destination({
    dest: 'logs/app.log',
    mkdir: true,
    sync: true
  }),
);

export const devLoggers = pino({
  level: 'trace',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});
