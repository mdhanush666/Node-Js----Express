
const LogEvent = require('./LogEvent'); 

const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('log', (msg) =>{
  LogEvent(msg)
})
myEmitter.emit('log', 'Log event emitted');