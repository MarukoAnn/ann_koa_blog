const mysql = require('mysql')
const config = require('../config/db_config')

const pool = mysql.createPool({
    host: config.datebase.HOST,
    user: config.datebase.USERNAME,
    password: config.datebase.PASSWORD,
    database: config.datebase.DATABASE
})

exports.base = (sql, values) => {
   return new Promise((resolve, reject)=> {
    // 获取数据库链接   
    pool.getConnection((err, connection) => {
        if(err){
            reject(err)
        }else{
            // 执行sql语句
            connection.query(sql, values, (err,rows) => {
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
                // 关闭数据库
                connection.release();
            })
        }

    })
   })
}