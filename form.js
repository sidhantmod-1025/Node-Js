const http = require('http');
const fs = require('fs');
const queryString = require('querystring');

http.createServer((req, resp) => {

  fs.readFile('html/form.html', 'utf-8', (error, data) => {

    if (error) {
      resp.writeHead(500, { 'Content-Type': 'text/plain' });
      resp.end('Internal Server Error');
      return;
    }

    if (req.url === "/") {

      resp.writeHead(200, { 'Content-Type': 'text/html' });
      resp.write(data);
      resp.end();

    }

    else if (req.url === "/submit") {

      let dataBody = [];

      req.on('data', (chunk) => {
        dataBody.push(chunk);
      });

      req.on('end', () => {

        let rawData = Buffer.concat(dataBody).toString();

        let readableData = queryString.parse(rawData);

        console.log(readableData);
        let dataString = "My name is " + readableData.name + " and my email is " + readableData.email;
        console.log(dataString)

   //async way se  
      // fs.writeFileSync("text/"+readableData.name+".txt",dataString);
        //console.log("file create")
         
        //sync se file create
        fs.writeFile("text/" +readableData.name+".txt",dataString,'utf-8',(err)=>{
             if(err){
              resp.end("Internal server error")
              return false;
             }else{
              console.log("file create");
             }
        } )


        resp.writeHead(200, { 'Content-Type': 'text/html' });

        resp.write(`
          <h1>Data Submitted </h1>
          
          `);
          //<h2>Your Data:</h2>

          //<p><b>Name:</b> ${readableData.name}</p>
          //<p><b>Email:</b> ${readableData.email}</p> 

        resp.end();
      });
    }

    else {
      resp.writeHead(404, { 'Content-Type': 'text/plain' });
      resp.end('Page Not Found');
    }

  });

}).listen(3200);


  ;

//http.createServer((req,resp)=>{
  //resp.writeHead(200,{"content-type":'text/html'});
  //console.log(req.url);
  //if(req.url=="/"){
  //resp.write(`
  
    //<form action ="/submit" method = "post">
    //<input type ="text" placeholder ="enter name" name ='name'/>
     //<input type ="text" placeholder ="enter email" name ='email'/>
     //<button>Submit</button>
    //</form>
  //`);
  //}
  //else if(req.url =="/submit"){
  //resp.write('<h1>Data Submitted</h1>')
  //}
    
 //resp.end();
//}).listen(3200);
