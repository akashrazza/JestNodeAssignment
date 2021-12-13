var fs = require('fs');
var input_data = "";
//create Read Stream
var readstream = fs.createReadStream('input.txt');

//on getting data event
readstream.on('data',(data)=>{
    input_data=input_data+data;

})

//on end event
readstream.on('end',()=>{
    console.log("Text File Length : ",input_data.length);
    console.log("Text Word Length : ",input_data.split(" ").length);
    console.log("Text Line Length : ",input_data.split(".").length);
})

//on getting error event
readstream.on('error',(err)=>{
    console.log(err);
})
