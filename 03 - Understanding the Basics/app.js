// const http = require("http")
// const routes = require('./routes.js')

// console.log(routes.someText);

// const server = http.createServer(routes.handler);


// server.listen(3000)


const http = require("http")

const server= http.createServer((req,res)=>{
    // console.log(req.url , req.method);
    //process.exit()
    res.setHeader("Content-Type" , "text/html")
    res.write(`
       <html>
        <head> <title>First page</title></head> 
        <body>
            <h1>Hello world</h1>
        </body>
       </html> 
        `)
    res.end()
})
server
.listen(3000)