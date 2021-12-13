var fs = require('fs');

//creating reading file in sync
var read_data = fs.readFileSync('input.txt')

//Create a write Stream
var write_data = fs.createWriteStream('input2.txt');
write_data.write(read_data);

//on Finish Event
write_data.on('finish',()=>{console.log("File created and writed")})

//on error event
write_data.on('error',(err)=>{
    console.log(err);
})
