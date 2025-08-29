var http=require("http");

http.createServer(function(req,res){
    if(req.method=="POST"){

    let body="";
    req.on("data",function(chunk){
        body+=chunk;
    });
    req.on("end",function(){
        var formdata=querystring.parse(body);
        console.log(formdata);
        res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Form Submitted successfully</h1><p>");
   res.end();
    });
    
    }
    else{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("Welcome to my server!");
    res.write("<form method='POST'>");
    res.write("Name:<input type='text' name='name1'/>");
    res.write("Email:<input type='email' name='email1'/>");
    res.write("<input type='submit' value='Submit'/>");
    res.write("</form>");
    res.end();
    }


}).listen(8080);

 