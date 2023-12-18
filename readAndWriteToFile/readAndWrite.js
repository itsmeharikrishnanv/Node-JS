let http = require("http");
let fs = require("fs");

let server = http.createServer((req,res)=>{

    if(req.url === "/"){
        fs.readFile("sampleFile.txt",{encoding: "utf-8"}, (err,data)=>{
            if(err){
                console.log(err);
            }
            res.write("<html>");
            res.write("<head><title>ReadAndWrite</title></head>");
            res.write(`<p>${data}</p>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type = "submit">send</button></form></body>');
            res.write("<html>");
            return res.end();
        })
    }

    if(req.url === "/message" && req.method === "POST"){
         let body = [];
         req.on("data",(chunk)=>{
            body.push(chunk);
         });
         req.on("end",()=>{
            let parsedData = Buffer.concat(body).toString();
            let message = parsedData.split('=')[1];
            fs.writeFileSync('sampleFile.txt',message);
            console.log(message);
         })
         res.statusCode = "302";
         res.setHeader('Location','/');
         return res.end();
    }
})

server.listen("3000");