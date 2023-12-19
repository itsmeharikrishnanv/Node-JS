let http = require("http");
let route = require('./route.js');

let server = http.createServer(route.handler);

server.listen("3000");
console.log(route.someText);
console.log("how are you");