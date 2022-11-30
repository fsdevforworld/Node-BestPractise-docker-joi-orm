import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import 'express-async-errors'
import { requestLogger } from './support/logger'
import { errorHandler, badJsonHandler, notFoundHandler } from './middlewares'
import { Routes } from './loaders'

const app = express()

config()

// enable cors
app.use(cors())

app.use(requestLogger)

// parse json body
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// handle bad json format
app.use(badJsonHandler)

// load routes
Routes(app)

// handle 404 not found error
app.use(notFoundHandler)

// catch all errors
app.use(errorHandler)

export default app
