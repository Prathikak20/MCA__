var http=require("http");
var querystring=require('querystring');
var uc=require("upper-case"); // uc means upper case
var lc=require("lower-case");

http.createServer(function(req,res){
    if(req.method==="POST"){
        let body="";
        req.on('data',function(chunk){
            body=body+chunk;
        });
        req.on('end',function(){
            var formdata=querystring.parse(body);
            console.log(formdata);
            console.log(formdata.name1);
            console.log(formdata.email1);

            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("<h1>form submitted succesfully</h1><p>");
            res.write(`<p>name=${uc.upperCase(formdata.name1)}</p>`);
            res.write(`<p>email=${lc.lowerCase(formdata.email1)}</p>`);
         
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