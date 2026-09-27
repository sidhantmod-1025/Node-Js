/*console.log("applw 1");
setTimeout(()=>{
  console.log("applw 2");
},2000);

console.log("applw 3");*/

/*const fs = require('fs');

fs.readFile("text/sidhu.txt","utf-8",(error,data)=>{
  if(error){
    return false;
  }
  
    console.log(data);
  
})
    */
   const fs = require('fs');
   const data =fs.readFileSync("text/sidhu.txt","utf-8");
   console.log(data);


console.log("End Script");