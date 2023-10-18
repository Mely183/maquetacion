require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const router = express.Router()
const cors = require("cors")

/** Directories */
const routes = require('./routes/index')
// const docs = require('./doc/index')
//const swaggerJSDoc = require('swagger-jsdoc')
//const swaggerUI = require('swagger-ui-express')
// const swaggerSpec = swaggerJSDoc(docs)
const db = require('./lib/db')
// const errorHandler = require('./middlewares/errorHandler')

/** Middlewares */
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


db.connect()

// app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

/** Routes */
app.use(routes)
// app.use(errorHandler.errorHandler)


/** Server - Bucle que va a estar escuchando constantemente */
app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
})