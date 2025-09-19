const http=require("http");
const querystring=require('querystring');
http.createServer(function(req,res){

    if(req.method==="POST"){
        let body="";
        req.on('data',function(chunk){
            body=body+chunk;
        });

        req.on('end',function(){
            const formdata=querystring.parse(body);
            const username=formdata.name1||"";
            const passrd=formdata.passrd||"";
            if(!username || !passrd){
                res.writeHead(200,{"Content-Type":"text/html"});
                res.write("username and password cannot be empty");
                res.end();
            }


            //validation 2

            if(username.length<3){
                 res.writeHead(200,{"Content-Type":"text/html"});
                res.write("username must be at least 3 characters long");
                res.end();

            }


            //validation 3

            if(passrd.length<6){
                res.writeHead(200,{"Content-Type":"text/html"});
                res.write("password must be at least 6 characters long");
                res.end();

            }
            //if all validations pass
          
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(`login successful, welcome ${formdata.name1}`);
            res.end();
        });
    }

    else{

    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("Welcome to my server!");
    res.write(`<form method='POST'>
        user  name <input type='text' name='name1'/>
          password<input type='password' name='passrd'/>
          <input type='submit' value='Submit'/>
    </form>`);
    res.end();
    
}
        }).listen(8080);
