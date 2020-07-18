const EventEmitter=require('events');

var url='http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message){
        //send an HTTP request
        console.log(message); //log the message on console
        //raise an event
        this.emit('messageLogged', { id: 1, url: 'http://'});
    }
}

module.exports=Logger;