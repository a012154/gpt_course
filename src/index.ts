require('dotenv').config()
import cors from 'cors'
import express from 'express'
import * as path from 'path'
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import apiRouter from './app_api/routes/index'
import { sequelize } from './app_api/models/sequelize'


const app = express()

app.use(cors({ origin: '*', credentials: true }))
app.use(fileUpload({ limits: { fileSize: 10 * 1024 * 1024 } }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(passport.initialize())
app.use('/api', apiRouter)
app.use(cookieParser())

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
  if (process.env.RUN_CRONJOBS == 'true') {

  }
})

sequelize.authenticate().then(() => {
    console.log('DB Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

export default app