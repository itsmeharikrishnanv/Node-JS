const http = require('http');
const { text } = require('stream/consumers');

let server = http.createServer((req,res) => {
    let url = req.url;
    
    if(url === '/home'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>')
        res.write('<body>');
        res.write('<h1>Welcome Home </h1>');
        res.write('</body>');
        res.write('</html');
        return res.end();
    }

    else if(url === '/about'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>AboutUs</title></head>');
        res.write('<body><h1>Welcome To About Us Page</h1></body>');
        res.write('</html>');
        res.end();
    }

    else if(url === '/node'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>AboutUs</title></head>');
        res.write('<body><h1>Welcome To My Node JS Project</h1></body>');
        res.write('</html>');
        res.end();
    }
})

server.listen(3000);