const http = require('http');
const fs = require('fs');
const queryString=require('querystring');

http.createServer((req,resp)=>{
  fs.readFile('html/form.html','utf-8',(error,data)=>{
    if(error){
      resp.writeHead(500,{"content-type":'text/plain'})
      resp.end("Internal server error")
      return;
    }
     
     if(req.url=="/"){
         resp.writeHead(200,{"content-type":'text/html'});
      resp.write(data);

     }
     else if(req.url=="/submit"){
      let dataBody=[];
      req.on('data',(chunk)=>{
        dataBody.push(chunk);
      });
        req.on('end', () => {

        let rawData = Buffer.concat(dataBody).toString();

        let readableData = queryString.parse(rawData);

        console.log(readableData);

        resp.writeHead(200, { "content-type": "text/html" });
        resp.write("Form submitted successfully");
        resp.end();
      });

    }

  });

}).listen(3000);

console.log("Server running on port 3000");
     
     