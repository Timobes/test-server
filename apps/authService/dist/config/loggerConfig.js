"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.devLoggers = exports.loggers = void 0;
const pino_1 = __importDefault(require("pino"));
exports.loggers = (0, pino_1.default)({
    level: 'trace',
}, pino_1.default.destination({
    dest: 'logs/app.log',
    mkdir: true,
    sync: true
}));
exports.devLoggers = (0, pino_1.default)({
    level: 'trace',
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
        },
    },
});
