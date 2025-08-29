var http=require("http");
var querystring=require('querystring');

http.createServer(function(req,res){
	if(req.method=== "POST"){
		
       let body="";
	   req.on('data',function(chunk){
		   body=body+chunk;		   
	   });
	   req.on('end',function(){
		   
		var formdata=querystring.parse(body) ;
        console.log(body);

         console.log(formdata);
         console.log(formdata.name1);
         console.log(formdata.email);
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write("form submitted successfully");
        res.write(`<p>name=${formdata.name1}</p>`);
        res.write(`email=${formdata.email}`);
		res.end();   
		   
	   });
		
		
		
		
	}else{
	
		 res.writeHead(200,{'Content-Type':'text/html'});
		 res.write("<form method='POST' >");
		 res.write('name <input type=text name=name1 />');
		 res.write('email <input type=text name=email />');
		 res.write('<input type=submit />');
		 res.write('</form>');
		 res.end();	
	}
	 
	 
}).listen(8081);