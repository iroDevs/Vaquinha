const swaggerAutogen = require('swagger-autogen')()
const doc = {
  info: {
    version: '1.0.0',
    title: 'Vaquinha API',
    description: 'Vaquinha api '
  },
  host: 'localhost:3002',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'ADM',
      description: 'Endpoints'
    },
    {
      name: 'User',
      description: 'Endpoints'
    }
  ],
  securityDefinitions: {
    api_key: {

    },
    petstore_auth: {
    }
  },
  definitions: {
    ADM: {
      name: 'Roberto',
      email: 'Robs@robs.com',
      senha: 'senha123'
    }
  }
}

const outputFile = './src/swagger_docs.json'
const endpoints = ['./src/routes/*.js']

swaggerAutogen(outputFile, endpoints, doc)
