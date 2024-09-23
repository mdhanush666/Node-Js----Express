const express = require('express');
const app     = express();
const path    = require('path');
const PORT    = process.env.PORT || 3000;

const {logger}  = require('./middleWare/logEvents');
const errorHandler = require('./middleWare/errorHandler')

const cors = require('cors');
const corsOptions = require('./config/corsOptions');

// Third-Party MiddleWare...........................
app.use(cors(corsOptions))
// ............................................

// Custom MiddleWare...........................
app.use(logger)
// ............................................

// MiddleWare..................................
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/', express.static(path.join(__dirname,'public')))
app.use('/subdir', express.static(path.join(__dirname,'public')))
//............................................


// Routes...................................

app.use('/', require('./routes/root'))
app.use('/subdir', require('./routes/subdir'))
app.use('/employees', require('./routes/api/employees'))

// ------------------------------------------
const one = (req, res, next)=>{
  console.log('1');
  next();
} 

const two = (req, res, next)=>{
  console.log('2');
  next();
}

const three = (req, res, next)=>{
  console.log('3');
  res.send('1, 2, 3 Finished');
}

app.get('/chain(.html)?', [one,two,three]);
//---------------------------------------------------

app.get('/*', (req, res)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})


app.use(errorHandler)

app.listen(PORT, ()=> console.log(`Server is running on : ${PORT}`));
