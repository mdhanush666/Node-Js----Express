
const fs = require('fs');
const path = require('path');

// Read File....................
fs.readFile(path.join(__dirname,'files','read.txt'), 'UTF8',(err,data) =>{
  if(err) throw err
  
  console.log('Step 1 ______________________')
  console.log(data)
  
// Write File..........................
  const msg = 'This is WRITE FILE';

  fs.writeFile(path.join(__dirname,'files','write.txt'), msg,(err) =>{
    if(err) throw err
    console.log('Step 2 ______________________')
    console.log('file write success')

// Update/Append File................................
    const appendMsg = '\n\n Append working';

    fs.appendFile(path.join(__dirname,'files','write.txt'),appendMsg,(err) =>{
      if(err) throw err
      console.log('Step 3_______________________')
      console.log('Append Success')

// Rename File.................................
      fs.rename(path.join(__dirname,'files','write.txt'),path.join(__dirname,'files','newWrite.txt'), (err)=>{
        if (err) throw err
        console.log('Step 4---------------------')
        console.log('File Renamed')
      })
    })
  })
})

process.on('uncaughtException',err =>{
  console.error(`Error --------------- ${err}`);
  process.exit(1);
}) 
