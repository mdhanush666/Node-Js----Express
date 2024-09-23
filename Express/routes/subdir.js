const path = require('path');
const express = require('express');
const router = express.Router();

router.get('^/$|index(.html)?', (req,res) =>{
  res.sendFile(path.join(__dirname,'..','views','subdir','index.html'))
})

router.get('/test(.html)?', (req,res) =>{
  res.sendFile(path.join(__dirname,'..','views','subdir','test.html'))
})

module.exports = router;