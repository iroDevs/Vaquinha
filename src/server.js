
const swaggerUi = require('swagger-ui-express')
const swaggerOptions = require('./swagger_docs.json')
const bodyParser = require('body-parser')
const express = require('express')
const admRoutes = require('./routes/admRoute')
const errosMiddleware = require('./middleware/Erros')
require('dotenv').config()

const app = express()
const port = process.env.NODE_PORT || 5000
app.use(bodyParser.json())

app.use('/adm', admRoutes)
app.use(errosMiddleware)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
