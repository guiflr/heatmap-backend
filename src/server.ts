import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import { routes } from './routes'

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json());
app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
