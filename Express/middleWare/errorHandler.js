const {logEvent} = require('./logEvents');

const errorHandler = (err,req,res,next) =>{
  logEvent(`${err.name}\t${err.message}`, 'errorLog.txt');
  console.log(err.stack);
  res.status(500).send(err.message);
  next();
}

module.exports = errorHandler;