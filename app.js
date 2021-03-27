import express from 'express'
import path from 'path'
const app = express()
const PORT = process.env.PORT || 3000
const url = 'https://api.exchangeratesapi.io/latest'
import ServerRoutes from './Routes/server.js'
const __dirname = path.resolve()

import https from 'https'
let textJSON

app.use(express.static('client'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(ServerRoutes)

https.get(url,(res) => {
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
        textJSON=body;
    });

}).on("error", (error) => {
    console.error(error.message);
})


app.get('/api/getex', (req, res) => {
    res.send(textJSON)
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})