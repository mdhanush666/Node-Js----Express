const fs = require('fs');

if(fs.existsSync('./new')){
  fs.rmdir('./new',err =>{
    if(err) throw err;
    console.log("Folder Delete Success");
  })
}
else{
  fs.mkdir('./new',(err) =>{
    if(err) throw err;
    console.log("Folder Create Success");
  })
}