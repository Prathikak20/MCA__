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


// var sql="CREATE TABLE Products(productid varchar(255),productname varchar(255),unitprice int,stockavailable int,expirydate date)"; 

// con.query(sql,function(err,result){
//     if(err) throw err;
//     console.log("Table created");
// });


var sql="INSERT INTO Products (productid,productname,unitprice,stockavailable,expirydate) VALUES ?";
var values=[
    ['P101','Product1',100,50,'2023-12-31'], 
    ['P102','Product2',200,30,'2024-01-15'],
    ['P103','Product3',150,20,'2024-02-28'],
    ['P104','Product4',250,10,'2024-03-31 ']
];
con.query(sql,[values],function(err,result){
    if(err) throw err;
    console.log("4 records inserted" );
});