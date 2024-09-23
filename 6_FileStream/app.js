
const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join((__dirname),"bigFile.txt"),'utf8');
const ws = fs.createWriteStream(path.join((__dirname),"bigTextNew.txt"));


// 1 Method..

// rs.on('data',(dataChunk) =>{
//   ws.write(dataChunk);
// })

// 2 Method  (Efficient way)..

rs.pipe(ws);