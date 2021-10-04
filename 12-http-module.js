const http = require('http');

const server = http.createServer((req,res)=>{ // req - ka useris requestina, res - ka mes siusime
    // console.log(req);
    if(req.url === '/'){
        // res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('About us')
    }
    // res.end('ehh')
    // res.end(`
    //     <h1>Ooops!</h1>
    //     <p>No page</p>
    //     <a href="/" >back home</a>
    // `)
})

server.listen(5000);



