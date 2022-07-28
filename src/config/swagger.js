module.exports = {
  info: {
    version: '1.0.0',
    title: 'Vaquinha Back-end',
    description: 'Documentação da API da vaquinha'
  },
  host: 'localhost:3002',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    JWT: {
      description: 'JWT token',
      type: 'apiKey',
      in: 'header',
      name: 'Authorization'
    }
  },
  definitions: {
  }
}
