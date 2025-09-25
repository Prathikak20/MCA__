const http=require("http");
const fs=require("fs");
const path=require("path");
http.createServer(function(req,res){
    fs.open("aimit.txt",'wx',function(err,fd){
        if(err) throw err;
        fs.write("aimit.txt","hello aimit",function(err){
            if(err) throw err;
      
            console.log("written successfully");
           
            });
        });
    
}).listen(8080);