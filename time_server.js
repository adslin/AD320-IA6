var net = require('net');

function time(i) {
    return i < 10 ? '0' + i : i
}

var server = net.createServer((socket) => {
    data = new Date();
    now = data.getFullYear() + '-' + 
    time(data.getMonth() + 1) + '-' + 
    time(data.getDate()) + ' ' + 
    time(data.getHours()) + ':' + 
    time(data.getMinutes()) + '\n';
    socket.end(now);
}).listen(process.argv[2]);