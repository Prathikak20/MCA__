var express = require('express');
//create express application

var app=express();

app.get('/',function(req,res){
    res.send("hello world");
});

app.get('/about',function(req,res){
    res.send("this is about page");
});
app.get("/api/user",function(req,res){
    res.json({name:"john",age:30});
});

app.listen(8081,function(){
    console.log("server running");
});
   