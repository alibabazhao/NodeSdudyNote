
var url='http://mylogger.io/log';

function log(message){
    //send an HTTP request
    console.log(message); //log the message on console
}

// // export an object
// module.exports.log=log; //call the function log
// // module.exports.endPoint=url;

//export a single method
module.exports=log;
