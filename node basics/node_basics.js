const http = require('http');

let server = http.createServer((req,res)=>{
    console.log("Hari");
})

server.listen(4000);