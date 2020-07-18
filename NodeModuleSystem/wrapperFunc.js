//var x=; //will cause error

//wrap functoin
//(function (exports, require, module, __filename, __dirname){

    console.log(__filename);
    console.log(__dirname);

    var url='http://mylogger.io/log';

    function log(message){
        //send an HTTP request
        console.log(message); //log the message on console
    }

    //export a single method
    module.exports=log;

    module.exports.log=log;
    exports.log=log;

    //exports=log;//cause errors
//});
