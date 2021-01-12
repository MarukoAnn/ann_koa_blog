const db = require('../utils/db.js')

exports.getUserInfo = async (ctx) => {
 console.log('请求方式：' + ctx.method);
 let sql = 'select * from  flag_info';
 await db.base(sql, null).then(res => {
     ctx.body = res;
  }).catch(err => {
      throw err;
  })
}