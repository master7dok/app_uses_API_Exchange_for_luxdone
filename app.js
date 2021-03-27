const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000
const url = 'https://api.exchangeratesapi.io/latest'

const https = require('https');
let textJSON

app.use(express.static('client'))

https.get(url,(res) => {
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
        textJSON=body;
    });

}).on("error", (error) => {
    console.error(error.message);
})
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/client/index.html'))

})
app.get('/api/getex', (req, res) => {
    res.send(textJSON)
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})