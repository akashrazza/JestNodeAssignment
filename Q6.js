var readline = require('readline-sync');
var fs = require("fs");
//Input 
var data = readline.question("Enter Text To seaech")
read_data=""
//Reading File input.txt in sync
var read_data =  read_data + fs.readFileSync('input.txt')

//check if input exist or not
if(read_data.includes(data)){
    console.log("Found Data");
}
else{
    console.log("Not Found");
}
