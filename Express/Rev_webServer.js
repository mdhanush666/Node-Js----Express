
const express = require('express');
const app     = express();
const path    = require('path');
const PORT    = process.env.PORT || 3000;

//...........................................................

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

//...........................................................


app.get('^/$|index(.html)?',(req,res) =>{
  res.sendFile(path.join(__dirname,'views','index.html'))
})

app.get('/new-page(.html)?',(req,res) =>{
  res.sendFile(path.join(__dirname,'views','new-page.html'))
})

app.get('/old-page(.html)?',(req,res) =>{
  res.redirect(301,'new-page.html')
})

//......................................................

const one = (req,res,next) =>{
  console.log('1')
  next();
}

const two = (req,res,next) =>{
  console.log('2')
  next();
}

const three = (req,res,next) =>{
  console.log('3')
  console.log('1, 2, 3 Tasks Finished')
}

app.get('/chain(.html)?', [one,two,three])

//......................................................

app.get('/*', (req,res)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(PORT, () => console.log("Server is Running on : ", PORT))