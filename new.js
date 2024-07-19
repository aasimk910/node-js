const app = require('express')

const server = app()

// server.use((require, response)=>{
//     console.log('request received in sever' +request)
// })

server.get('/',(require, response)=>{
    response.end('Express App')
})

server.listen(3000)