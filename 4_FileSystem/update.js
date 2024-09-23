const fs = require('fs');
const path = require('path');

fs.writeFile(path.join((__dirname),"files","update.txt"),"Hello this is new File to check update ",(err) =>{
  if(err) throw err;
  console.log("Write Complete..")
  
  fs.appendFile(path.join((__dirname),"files","update.txt"),"\n\n This is the Update line..",(err) =>{
    if(err) throw err;
    console.log("Update Success");
  })
})

process.on('uncaughtException',err =>{
  console.error(`Error : ${err}`);
  process.exit(1);
}) 