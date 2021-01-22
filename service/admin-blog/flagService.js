const db = require('../../utils/db')
const util = require('../../utils/util')

// 获取flag列表
exports.getFlagInfoList = async (ctx) => {
    let sql = 'SELECT * FROM flag_info';
    await db.base(sql, null).then(res => {
        ctx.body = util.reMessageSuccess('请求成功', res)
    }).catch(err => {
        ctx.body = util.reMessageFail('请求失败,数据库操作异常')
        throw err;
    })
}

// 新增/ 编辑 flag 信息
exports.addFlagInfo = async (ctx) => {
    console.log(ctx.request.body);
    let data = null;
    let sql = '';
    // 判断是否有 id  有id 为编辑， 没有id 是新增
    if (!ctx.request.body.id){
        sql = 'insert into flag_info set ?';
        data = ctx.request.body;
    }else {
        sql = 'update flag_info set name = ?, color=? where id = ?';
        data = [ctx.request.body.name, ctx.request.body.color, ctx.request.body.id]
    }
    await db.base(sql, data).then(res => {
        if (res.affectedRows >= 1){
            ctx.body = util.reMessageSuccess('请求成功', null)
        }else {
            ctx.body = util.reMessageFail('请求失败,数据库操作异常')
        }
    }).catch(err => {
        ctx.body = util.reMessageFail(`请求失败,${err}`)
        throw err;
    })
}

// 删除 flag
exports.delFlagInfo = async (ctx) => {
    console.log(ctx.query);
    let data = ctx.query.id;
    let sql = `delete from flag_info where id =?`
    await db.base(sql, data).then((res) => {
        if (res.affectedRows >= 1){
            ctx.body = util.reMessageSuccess('请求成功', null)
        }else {
            ctx.body = util.reMessageFail('请求失败,数据库操作异常')
        }
    }).catch(err => {
        ctx.body = util.reMessageFail(`请求失败,${err}`)
        throw err;
    })
}
