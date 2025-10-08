import express from 'express'
import pollsRouter from './routes/poll'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    console.log("hello")
    res.status(200)
    res.json({ message: "Received" })
})

app.use('/polls', pollsRouter)

export default app

