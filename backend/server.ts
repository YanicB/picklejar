import express from 'express'

const App = express()

App.get("/", (req, res) => {
    console.log("hello")
    res.status(200)
    res.json({ message: "Received" })
})

export default App

