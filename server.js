const express = require('express')
const path = require('path')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static(path.join(__dirname, 'public')))

http.listen(3000, () => {
    console.log('服务启动在3000端口');
})

io.on('connection', socket => {
    console.log('连线成功');
    socket.on('msg', msg => {
        io.emit('msg', msg);
    })
})