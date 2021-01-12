const db = require('../utils/db.js')

exports.addBook = async (ctx) => {
    let data = JSON.parse(ctx.request.body.data);
    let sdata = [];
    data.forEach((v, index) => {
        let list = [v.book_img,v.book_name,v.book_autor,v.time];
        sdata.push(list)
    })
    console.log(sdata)
    let sql = 'insert into book_info(`book_img`,`book_name`,`book_autor`,`time`) VALUES ?';
    await db.base(sql, [sdata]).then(res => {
        if(res.affectedRows >= 1){
         ctx.body = '添加成功'   
        }
    }).catch(err => {
        throw err;
    })
}

exports.getBookInfo = async (ctx) => {
    console.log('请求方式：' + ctx.method);
    let sql = 'select * from  book_info';
    await db.base(sql, null).then(res => {
        ctx.body = res;
     }).catch(err => {
         throw err;
     })
   }