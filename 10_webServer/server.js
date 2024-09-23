
const http = require('http');
const PORT = 3000;
const fs   = require('fs');
const path = require('path');

const server = http.createServer((req,res) =>{
  res.writeHead(200,{"Content-Type" : "text/html"});

  fs.readFile(path.join(__dirname,'index.html'), (error,data) =>{
    if(error) throw res.writeHead(404), res.write('Page not found')
    res.write(data)
    res.end();
  })
})

server.listen(PORT,(error) =>{
  if(error) throw error
  console.log('Server is running on : ' + PORT);
})