var fs = require('fs');
var data = "Inputed data";

//Creating Write stream
var writestream = fs.createWriteStream('input1.txt');

//Writing into stream
writestream.write(data);

//on finish event 
writestream.on('finish',()=>{
    console.log(data);
})

//on error event
writestream.on('error',(err)=>{
    console.log(err);
})
