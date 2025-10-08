import * as dotenv from 'dotenv'
dotenv.config()
import app from './server.js'

app.listen(3001, () => {
    console.log("hello from port http://localhost:3001")
})
