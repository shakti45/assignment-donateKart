const http = require('http');
const {port} = require('../vars')

//server to handle HTTP requests
let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('Sample Donate Kart Server!\n');
});

server.listen(port,         
    ()=>{
        console.log(`Server started running on port ${port}`)
    }
);