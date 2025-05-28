"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerUIConfig = exports.swaggerConfig = void 0;
exports.swaggerConfig = {
    swagger: {
        info: {
            title: 'AniVi 3.0',
            description: 'API documentation',
            version: '1.0.0',
        },
        consumes: ['application/json'],
        produces: ['application/json'],
    },
};
exports.swaggerUIConfig = {
    routePrefix: '/api/docs',
    uiConfig: {
        docExpansion: 'full',
        deepLinking: false,
    },
};
