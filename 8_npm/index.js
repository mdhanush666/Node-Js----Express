console.log('Hello World')

const {format} = require('date-fns');
const {v4:id} = require('uuid');

console.log(format(new Date(), `dd - MM - yyyy\t HH:mm:ss `))

console.log(`ID : ${id()}`)


