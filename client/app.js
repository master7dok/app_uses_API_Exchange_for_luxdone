import path from "path";

const express = require('express')
const app = express()
const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()
app.listen(PORT, () => {
    console.log(`Server has been running on port ${PORT}...`)
})