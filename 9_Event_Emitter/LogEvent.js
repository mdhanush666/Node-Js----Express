
const {format} = require('date-fns');
const {v4:uuid} = require('uuid');
const fs = require('fs');

const fsPromises = require('fs').promises;
const path = require('path');

async function LogEvent(message){
  
  const dateTime = `${format(new Date(), 'dd-MM-yyyy\t HH:mm:ss')}`
  const logItem = `${dateTime}\t ${uuid()}\t ${message}\n`;

  try {    
    if(!fs.existsSync(path.join(__dirname,'logs'))){
     await fsPromises.mkdir(path.join(__dirname,'logs'));
    }

    await fsPromises.appendFile(path.join(__dirname,'logs','eventFile.txt'),logItem)
  } 
  catch (error) {
    console.error(error)
  }
}

module.exports = LogEvent;