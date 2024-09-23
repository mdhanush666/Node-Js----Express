
const os = require('os')

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log("Dir Name is  : ", __dirname);
console.log("File Name is : ", __filename);

const path  = require('path');

console.log("File Location  : ", path.dirname(__filename));
console.log("File base      : ", path.basename(__filename));
console.log("File Extension : ", path.extname(__filename));

console.log(path.parse(__filename));