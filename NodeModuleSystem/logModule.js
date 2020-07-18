//create module
var url='http://,ylogger.io/log';
function log(message){
    //send an http request
    console.log(message);
}

module.exports.log=log;

//module.export.url=url;
module.export.endPoint=url;