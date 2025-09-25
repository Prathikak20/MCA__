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


//create table  


// var sql="CREATE TABLE Product(productid int AUTO_INCREMENT PRIMARY KEY,productname varchar(255),unitprice DECIMAL(10,2),stockavailable int,expirydate date)"; 

// con.query(sql,function(err,result){
//     if(err) throw err;
//     console.log("Table created");
// });


var sql="INSERT INTO Product (productid ,productname,unitprice,stockavailable,expirydate) VALUES ?";
var values=[
    ['101','FAN',100.20,50,'2023-12-31'], 
    ['P102','BENCH',200.05,30,'2024-01-15'],
    ['P103','CHAIR',150.00,20,'2024-02-28'],
    ['P104','TABLE',250.00,10,'2024-03-31']
];
con.query(sql,[values],function(err,result){
    if(err) throw err;
    console.log("4 records inserted" );
});

sql="SELECT * FROM Product";
con.query(sql,function(err,result){
    if(err) throw err;
    console.log(result);
});

sql="update Product set unitprice=unitprice+10.00";
con.query(sql,function(err,result){
    if(err) throw err;
    console.log(result.affectedRows + "record(s) updated");
});