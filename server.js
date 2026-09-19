 const http = require('http');
 http.createServer((req,resp)=>{ //req = request , resp = response
  resp.writeHead(200,{'Content-Type':'text/html'});  // eske bina bhi code shi chale gaa

  resp.write("<h1>This is sidhu</h1>");
  resp.end("Hello how are you!  whAT IS YOUR OUTPUT CN TRUE hello ");

 }).listen(4800);

 