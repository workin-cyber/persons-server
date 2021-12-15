const express = require('express')
const app = express()
app.use(express.json())

const router = require('./router')
router(app)

const PORT = 3000
app.listen(PORT, () => console.log(`Server Is Running: ${PORT}`))
