const http = require('http') //http module set up server and listen to request and generate response
const fs = require('fs') // fs module to get html file off our disk

http.createServer((req, res) => {
  fs.readFile('demofile.html', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    res.end()
  })
}).listen(8000)

// http.createServer((req,res)=>{
//   fs.readFile('demo.js',(err,data)=>{
//     res.writeHead(200,{'content-type': 'text/html'})
//     res.write(data)
//     res.end()
//   })
// }).listen(8000)