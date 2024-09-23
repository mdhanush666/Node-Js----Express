
const path = require('path');
const fsPromises = require('fs').promises;

const fileOps = async () =>{
  try{
    await fsPromises.writeFile(path.join((__dirname),"files","text.txt"),"This is write");
    console.log("Write Complete..");
    
    const data = await fsPromises.readFile(path.join((__dirname),"files","text.txt"),'utf8');
    console.log(`read : \n${data}`);

    await fsPromises.appendFile(path.join((__dirname),"files","text.txt"),"\n\nThis is new Update");
    console.log("Update Complete..");

    await fsPromises.rename(path.join((__dirname),"files","text.txt"),path.join((__dirname),"files","newText.txt"));
    console.log("Rename Complete..");

// Delete...............
  
    await fsPromises.unlink(path.join((__dirname),"files","temp.txt"));
    console.log("Delete Success..");
  }
  catch(error){
    console.log(error);
  }
}

fileOps();