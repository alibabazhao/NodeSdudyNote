const os=require('os');
const { Console } = require('console');

var totalMemory=os.totalmem();
var freeMemory=os.freemem();

console.log('Total Memmory: '+totalMemory);

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);