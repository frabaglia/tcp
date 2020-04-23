const net = require('net')
const MESSAGE = require('./message')

const server = net.createServer(socket => {
    socket
    .setEncoding('utf-8')
    .on('data', data => {
        console.log('@ data @', data)
        if (data === MESSAGE) {
            setTimeout(() => socket.write(MESSAGE), 2000)
        }
    })
    .on('error', error => {
        console.log('@ error @', error)
    })    
})

server
.on('connection', socket => {
    console.log('@ connection @')
})

server.listen(9001)