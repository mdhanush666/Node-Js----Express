
const fs = require('fs');
const path = require('path');

let msg = "Hello \nThis message is for Write example";

fs.writeFile(path.join((__dirname),"files","write.txt"),msg,(err)=>{
  if(err) throw err;
  console.log("Write success..");

// Update..........

  fs.appendFile(path.join((__dirname),"files","write.txt"),"\nThis is the new update",err =>{
    if(err) throw err;
    console.log("Update Success...");

// Rename...........
  
  fs.rename(path.join((__dirname),"files","write.txt"),path.join((__dirname),"files","example.txt"),err =>{
    if(err) throw err;
    console.log("Rename Success..");
  })
  })
})

process.on('uncaughtException',error =>{
  console.log(error);
  process.exit(1);
})