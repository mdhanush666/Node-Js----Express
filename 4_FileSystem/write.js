
const fs  = require('fs');
const path  = require('path');


// Write File..........
fs.writeFile(path.join((__dirname),"files","writeMsg.txt"),"Hello This message is by writing",(err) =>{
  if(err) throw err;
  console.log("Write Completed!")
})

process.on('uncaughtException',err =>{
  console.log(`Error is : ${err}`);
  process.exit(1);
})