
const swaggerUi = require('swagger-ui-express')
const swaggerOptions = require('./swagger_docs.json')
const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.NODE_PORT || 5000

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions))

app.get('/aa', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
