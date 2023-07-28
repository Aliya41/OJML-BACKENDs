
/*
var mysql=require('mysql')
var pool=mysql.createPool({
host:'sql.freedb.tech',
port:3306,
user:'freedb_newSFR',
password:'aGMe4$44XvJrrn!',
database:'freedb_newSFR',
connectionLimit:100


})

module.exports = pool; 
*/



var mysql=require('mysql')
var pool=mysql.createPool({
host:'localhost',
port:3306,
user:'root',
password:'1234',
database:'newsfr',
connectionLimit:100


})

module.exports = pool; 
