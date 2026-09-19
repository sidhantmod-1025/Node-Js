const http = require('http');
const userData =[
  {
    name :'sidhant',
    age:30,
    email:'sidhant@modi.gmail.com'
  },
   {
    name :'sidhu',
    age:20,
    email:'sidhu@modi.gmail.com'
  },
   {
    name :'sid',
    age:10,
    email:'sid@modi.gmail.com'
  },

]
http.createServer((req,resp)=>{
resp.setHeader("Content-Type","application/json")
resp.write(JSON.stringify(userData));


resp.end( );
}).listen(6100);