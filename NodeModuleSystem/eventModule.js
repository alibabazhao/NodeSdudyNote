//EventEmitter is a class not object
const EventEmitter=require('events');

//emitter is an object of EventEmitter class
const emitter=new EventEmitter();

//register a listener
emitter.on('messageLogged', function(arg){
    console.log('Listener called'+ arg);
});


//raise an event 
//emit: make a noise
emitter.emit('messageLogged', { id: 1, url: 'http://'});

//raise: logging (data:message)