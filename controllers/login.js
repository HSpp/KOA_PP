var mysql = require('mysql');
var config=require('../mysqlConfig');
var connection = mysql.createPool(config);
async function queryUserInfor(ctx){
    var account=ctx.request.body.userName;
    return new Promise((resolve,reject)=>{
        connection.query("SELECT * FROM `accountTable` WHERE `account` = ?", [account], function(err, rows){
            console.log(rows,err)
            if(rows){
                resolve(rows)
            }else{
                reject(err)
            }

        })
    })   

}
module.exports=queryUserInfor;