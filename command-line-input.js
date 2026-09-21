const http = require('http');

const arg = process.argv;
const  port =arg[2];
http.createServer((req,resp)=>{
  resp.write("testing code   with consued Mind !")
  resp.end();

}).listen(port)  