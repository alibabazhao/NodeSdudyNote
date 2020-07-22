function log(req, res, next){
    console.log('Logging...'); // if req.body
    next();//then will pass control to the next middleware function
}

module.exports=log;