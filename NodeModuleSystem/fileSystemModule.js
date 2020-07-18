const fs=require('fs');

const file=fs.readdirSync('./');
console.log(file);

fs.readdir('./', function(err, file){
    if(err)
        console.log('Error ', err);
    else 
        console.log('Result', file);
})