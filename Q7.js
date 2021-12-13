var readline = require('readline-sync');
var fs = require("fs");

//Input text to search
var data = readline.question("Enter Text To search")
read_data=""

//Reading file
var read_data =  read_data + fs.readFileSync('input.txt')

//check if input exist in file
if(read_data.includes(data)){
    
    //Counting the occurance of input
    split_data = read_data.split("\n").join(",").split(" ").join(",").split(",");
    console.log(split_data)
    var count=0
    for (let ele of split_data){
        if(ele==data){
            count++;
        }
    }
    console.log("Number of count of words : ",count)
}
else{
    console.log("Not Found");
}
