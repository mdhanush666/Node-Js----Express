
const fs = require('fs');
const path = require('path');

fs.appendFile(path.join((__dirname),"files","update.txt"),"\n\n This is the new Update...",(err) =>{
  if(err) throw err;
  console.log("Update Success..");
})

process.on('uncaughtException',err =>{
  console.log(`Error : ${err}`);
  process.exit(1);
})