
const whiteList = 
[
  'https://www.google.com',
  'http://127.0.0.1:3500', 
  'http://localhost:3000'
];

const corsOptions = {
  origin : (origin, callback) =>{
    if(whiteList.includes(origin) || !origin){
      callback(null,true)
    }
    else{
      callback(new Error('Not allowed by CORS!'))
    }
  },
  optionSuccessStatus : 200
}

module.exports = corsOptions;