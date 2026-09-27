const http = require('http');
const age = 21;
 const server = http.createServer((req,resp)=>{
  resp.setHeader("Content-Type","text/html");
  resp.write(`
      <html>
      <head>
      <title>This is my node series!</title>
      </head>
      <body>
      <h1>hello laddu bass bhi kr ab kitna lade ge yaar</h1>
      <h3>`+age+`</h3>
       <h1>`+new Date()+`</h1>

      </body>
      </html>
    `)
  resp.end("last chance");

})
server.listen(4800)