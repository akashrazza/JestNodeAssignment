var dns  = require('dns');
var hostname = require('os');
var read_line = require('readline-sync');

//Input URL
var input_data = read_line.question("Entre URL");

//Getting Address and family
dns.lookup(input_data,(err,address,family)=>{
    console.log("address",address)
    console.log("family",family)
})

//Getting host name
dns.resolve4(input_data,(err,address)=>{
    if (err) throw err;
    console.log("all the ip address of ",JSON.stringify(address));

    address.forEach((a)=>{
        dns.reverse(a,(err,hostname)=>{
            if (err) throw err;
            console.log(a,hostname)
        })
    })
})
