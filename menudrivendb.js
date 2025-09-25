var mysql= require("mysql2");
var prompt= require("prompt-sync")();

var con=mysql.createConnection({
	host : "localhost",
	user: "root",
	password: "",
	database: "stuentdb"
});
con.connect(function(err){
	if (err) throw err;
	console.log(" connected");
	menu();
});
function menu(){
	console.log(" \n student CRUD app ");
	console.log(" 1: add student");
	console.log(" 2: view students");
	console.log(" 3: update student");
	console.log(" 4: delete student");
	console.log(" 5: exit");
  let choice= prompt(" enter your choice");	
   switch(choice){
	   
	   case "1":addstudent();
	            break; 
	  case "2": viewstudents()
	           break; 
        case "3":
               updatestudent();
               break;
        
	   case "5": process.exit();
	   
   }
   
   function updatestudent(){
         var id= prompt("enter id to update");  
            var name= prompt("enter new name");
            var age= prompt("enter new age");
            var course= prompt("enter new course");

            var sql="update students set name=?,age=?,course=? where id=?";
            con.query(sql,[name,age,course,id],function(err,result){
                if(err) throw err;
                console.log("record(s) updated successfully");
                  menu();
            }
            );
          
    }//end of update student


   function viewstudents(){
con.query("select * from students ",function(err,result){
	 if(err) throw err;
	 console.log(result);
	 menu();
	
});   
	   
   }//end of viewstudents()
   
   function addstudent(){
	   var name= prompt("enter name");
	   var age= prompt("enter age");
	   var course= prompt("enter course");
	   
var sql= "insert into students (name,age,course) values (?,?,?)";
   
    con.query(sql,[name,age,course],function(err,result){
		if(err) throw err;
		console.log("1 rec inserted");	
	});
	menu();
   }//end of add studnt
   

  
}//end of menu