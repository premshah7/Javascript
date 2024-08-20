const http = require('http')

const server = http.createServer((req,res)=>{
    req.StatusCode = 200;
    res.setHeader('content-Type','text/html');
    if(req.url == '/favicon.ico'){
        res.end(' ');
    } else if(req.url == '/home'){
        res.write('welcome Home');
        res.write('</br>');
        // res.write('bye bye');
        res.end();
    } else if(req.url == '/contact'){
        res.end('Contact is :');
    } else {
        res.end('404 not found');
    }
})

server.listen(3500)