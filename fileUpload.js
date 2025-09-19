const http=require("http");
const formidable=require("formidable");
http.createServer(function(req,res){
    if(req.url==="/fileupload"){



        const form=new formidable.IncomingForm();
        form.uploadDir="./uploads";
        form.parse(req,function(err,fields,files){
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
            res.write("file uploaded successfully");
            res.end();
         })
    }
    else{

    
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write(`<form action='fileupload' method='post' enctype='multipart/form-data'>
        <input type='file' name='filetoupload'>
        <button type='submit'>upload file</button>
    </form>`);
    res.end();
    }


}).listen(8080);