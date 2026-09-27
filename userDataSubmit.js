const queryString = require('querystring');
function userDataSubmit(req,resp){
   let dataBody =[];
      req.on('data',(chunk)=>{
        dataBody.push(chunk);
      });
      req.on('end', () => {
      
              let rawData = Buffer.concat(dataBody).toString();
      
              let readableData = queryString.parse(rawData);
      
              console.log(readableData);
              
              //let dataString = "My name is " + readableData.name + " and my email is " + readableData.email;
             //console.log(dataString)
               resp.write(`

   <h1> You Can Get Data From Here</h1>
    <h2>Your Data:</h2>

          <p><b>Name:</b> ${readableData.name}</p>
          <p><b>Email:</b> ${readableData.email}</p>
  `);
  resp.end();
});
 

}
module.exports =userDataSubmit;