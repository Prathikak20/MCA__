const http=require("http");
const fs=require("fs");
const path=require("path");
http.createServer(function(req,res){
    fs.open("aimit.txt",'w',function(err,fd){
        if(err) throw err;
        fs.write(fd,"hello world",function(err){
            if(err) throw err;
            console.log("written successfully");
            fs.close(fd,function(err){
                if(err) throw err;
                console.log("file closed successfully");
            });
        });
    });
}).listen(8080);