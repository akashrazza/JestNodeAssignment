var fs = require('fs');
var input_data = ""
//Create Read Stream on file input.txt
var readstream = fs.createReadStream('input.txt');

//on data event
readstream.on('data',(data)=>{
    input_data=input_data+data;
})

//on end event
readstream.on('end',()=>{
    console.log(input_data)
})

//on getting error event
readstream.on('error',(err)=>{
    console.log(err);
})
