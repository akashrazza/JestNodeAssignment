var http = require('http')
var url = require('url')
var fs = require('fs');

//Creating Server and Sending json data at port 8081
http.createServer((req,res)=>{
    var pathname = url.parse(req.url).pathname;
    console.log(pathname)
    if(pathname.substr(1)=="index.html"){
        fs.readFile(pathname.substr(1),(err,data)=>{
            if(err){
                throw err;
                res.writeHead(404,{'Content-type':'text/html'})
            }
            else{
            res.writeHead(200,{'Content-type':'text/html'})
            // console.log(data.toString())
            res.write(data.toString());}
            res.end()
        })
    }
    if(pathname.substr(1)=="getData"){
        res.writeHead(200,{'Content-type':"application/json"})
        res.write(JSON.stringify({"empid":007, "name":"RAJA KUMAR", "dept":"DEV","designation":"CEO"}
        ))
        res.end()
    }
    
}).listen(8081)
