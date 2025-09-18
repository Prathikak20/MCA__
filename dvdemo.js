var mysql=require("mysql2")

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"aimit168"
   
}); 

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");      
});

// con.query("CREATE DATABASE aimit168",function(err,result){
//     if(err) throw err;
//     console.log("Database created");
// });


//comment the database becuse database shoquld be created only once
//create table  


// var sql="CREATE TABLE employee(empno varchar(255),empname varchar(255))";
// con.query(sql,function(err,result){
//     if(err) throw err;
//     console.log("Table created");
// });

//insert data
// var sql="INSERT INTO employee VALUES('101','John')";
// con.query(sql,function(err,result){
//     if(err) throw err;
//     console.log("1 record inserted");
// });

// var sql="INSERT INTO employee VALUES('102','Aadhya')";
// con.query(sql,function(err,result){
//     if(err) throw err;
//     console.log("2 record inserted");
// });

// var sql="INSERT INTO employee VALUES('103','Kiara')";
// con.query(sql,function(err,result){
//     if(err) throw err;
//     console.log("3 record inserted");
// });

// var sql="INSERT INTO employee VALUES('104','Rian')";
// con.query(sql,function(err,result){
//     if(err) throw err;
//     console.log("4  record inserted");
// });

//inserting multiple values

// var sql="INSERT INTO employee (empno,empname) VALUES ?";
// var values=[
//     ['105','Aryan'], 
//     ['106','Anaya'],
//     ['107','Vivaan'],
//     ['108','Aarav']
// ];
// con.query(sql,[values],function(err,result){
//     if(err) throw err;
//     console.log("4 records inserted" );
// });



sql="SELECT * FROM employee";
con.query(sql,function(err,result){
    if(err) throw err;
    console.log(result);
});