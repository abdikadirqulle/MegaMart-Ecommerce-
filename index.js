const express = require('express')

const server = express()

server.use(express.json())

server.get('/', (req,res) => {
    console.log("hellow from express")
})

const PORT = 4000

server.listen(PORT, () => {
    console.log("server started")
})