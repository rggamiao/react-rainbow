const express = require('express')
const app = express ()

require('dotenv')

app.get('/', (req,res) => {
    res.send("Hello world!'))
})
app.listen(process.env.PORT)
console.log(process.env.PORT)