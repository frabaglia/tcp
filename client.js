const net = require('net')
const MESSAGE = require('./message')
const opts = {
    host: '127.0.0.1',
    port: 9001
}
const client = net.createConnection(opts, () => {
    console.log('@ connected @')
    setTimeout(() => client.write(MESSAGE), 2000)
})    

client
client.setEncoding('utf-8')
.on('data', data => {
    console.log('@ data @', data)
    if (data === MESSAGE) {
        setTimeout(() => client.write(MESSAGE), 2000)
    }
})
.on('error', error => {
    console.log('@ error @', error)
})