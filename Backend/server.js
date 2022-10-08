const express = require('express')
const dotenv = require('dotenv').config()
const port = 3500

const app = express()

app.listen(port, () => console.log(`Server started on port ${port}`))