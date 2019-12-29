const EventEmitter = require('events');
const uuid = require('uuid');

console.log(uuid.v4());
console.log(uuid.v4());
console.log(uuid.v4());
console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg) {
        // Call Event
        this.emit('message', { id: uuid.v4(), msg });
    }
}

// module.exports = Logger;

// const Logger = require('./logger');
const logger = new Logger();

logger.on('message', (data) => console.log(`Called Listered`, data));

logger.log('Hello World');
logger.log('How are you?');
logger.log('Where are you?');

