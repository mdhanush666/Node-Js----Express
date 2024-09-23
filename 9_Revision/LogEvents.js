const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path')

const {format} = require('date-fns');
const {v4:id} = require('uuid');

async function LogEvents(msg){
  const dateTime  = format(new Date(), 'dd/MM/yyyy\tHH:mm:ss');
  const logMsg    = `${dateTime}\t${id()}\t${msg}\n`; 

  try {    
    if(!fs.existsSync(path.join(__dirname,'logs'))){
      await fsPromises.mkdir(path.join(__dirname,'logs'))
    }

    await fsPromises.appendFile(path.join(__dirname,'logs','log.txt'), logMsg)
    
  } 
  catch (error) {
    console.error('Error - ', error)  
  }

}

module.exports = LogEvents;
