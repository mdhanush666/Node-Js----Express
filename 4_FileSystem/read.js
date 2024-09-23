const fs = require('fs');
const path  = require('path');

//fs.readFile("../files/example1.txt",'utf8',(err,data)=>{

// fs.readFile(path.join((__dirname),"fildes","text.txt"),'utf8',(err,data)=>{
//   if(err) throw err;
//   console.log(data);
// });

// process.on('uncaughtException', err =>{
//   console.error(`There is a Error ${err}`);
//   process.exit(1);
// })

// Read File...........
fs.readFile(path.join((__dirname),"files","text.txt"),'utf8', (err,data) =>{
  if(err) throw err;
  console.log("Msg is : ", data);
})

process.on('uncaughtException',err =>{
  console.log(`Error is : ${err}`);
  process.exit(1);
})

