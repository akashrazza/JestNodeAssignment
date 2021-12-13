var os = require('os');
var fs= require('fs');

//Create dir Node
fs.mkdir("Node",()=>{console.log("Folder Created")});

//Creating Stream
var write_stream = fs.createWriteStream('Node/input.txt');

//Writing into Stream
write_stream.write("");

//Event Finish on Writing into straeam
write_stream.on('finish',()=>{console.log("created")})

//handle Error on writing Stream
write_stream.on('error',(err)=>{console.log(err)})

console.log("File created")
//unlinking file
fs.unlink('Node/input.txt',(err,data)=>{
    if (err) throw err;
    console.log("Folder Deleted")
})
