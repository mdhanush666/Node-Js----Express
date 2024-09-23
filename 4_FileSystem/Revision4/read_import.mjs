
// const fs = require('fs');
// const path = require('path');

import {readFile} from 'node:fs';


// fs.readFile(path.join((__dirname),"files","readd.txt"),'utf8',(err,data) =>{
//   if(err) throw err;
//   console.log("Reading : \n",data);
// })


readFile("./files/read.txt",'utf8',(err,data) =>{
  if(err) throw err;
  console.log("Read Using import : \n" + data);
})

process.on('uncaughtException',error =>{
  console.log(`Error is : ${error}`);
  process.exit(1);
})