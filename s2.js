var express=require("express");
var app=express();

app.use(express.urlencoded({extended:true}));



app.get("/",function(req,res){
    res.send(`<form action="/submit" method="post">
    Name: <input type="text" name="name"><br>
    email: <input type="email" name="email"><br>
    <input type="submit" value="Submit">


    </form>
 `);



});


app.post("/submit",function(req,res){

    var name=req.body.name;
    var email=req.body.email;
    res.send(`from the form submitted <br> Name: ${name} <br> email: ${email}`);
});


app.listen(3000,function(){
    console.log("server started at 3000");
});        



            