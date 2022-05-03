const port = 3003

const express = require('express')

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.listen(port, () => {
  console.log(`Backend está roando na porta ${port}`)
})

// server.use((request, response, next) => {
//   console.log('Meu middleware 1')
//   next()
// })

// server.use((request, response, next) => {
//   console.log('Meu middleware 2')
//   response.send('Funcionou!')
// })