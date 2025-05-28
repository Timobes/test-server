export const swaggerConfig = {
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

export const swaggerUIConfig = {
  routePrefix: '/api/docs',
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false,
  },
} as const;
