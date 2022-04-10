require('dotenv').config()
const express = require('express')

const PORT = process.env.PORT || 5002;
const app = express()

app.listen(PORT, () => {
  console.log('Server has been started on port ' + PORT)
})