const swaggerAutogen = require('swagger-autogen')()
const doc = require('./config/swagger')

const outputFile = './src/swagger_docs.json'
const endpoints = ['./src/server.js']

swaggerAutogen(outputFile, endpoints, doc)
