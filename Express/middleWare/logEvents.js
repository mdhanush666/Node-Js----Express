
const {format}  = require('date-fns');
const {v4:uuid} = require('uuid');

const path       = require('path');
const fs         = require('fs');
const fsPromises = require('fs').promises;

const logEvent   = async (message,fileName) =>{
  const dateTime = format(new Date, 'dd-MM-yyyy\tHH:mm:ss');
  const logMsg   = `${dateTime}\t${uuid()}\t${message}\n`;

  try {
    if(!fs.existsSync(path.join(__dirname,'..','logs'))){
      await fsPromises.mkdir(path.join(__dirname,'..','logs'))
    }

    await fsPromises.appendFile(path.join(__dirname,'..','logs',fileName), logMsg)

  } 
  catch (error) {
    console.error(error);
  }
}

const logger = (req,res,next) =>{
  logEvent(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt')
  next()
}

module.exports = {logger, logEvent};