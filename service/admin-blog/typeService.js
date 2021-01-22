const db = require('../../utils/db')
const util = require('../../utils/util')
//log工具
const logUtil = require('../../utils/log_util');
// 获取 type 列表
exports.getTypeList = async (ctx) => {
    let sql = 'SELECT * FROM type_info';
    await db.base(sql,null).then(res => {
        ctx.body = util.reMessageSuccess('请求成功', res)
    }).catch(err => {
        logUtil.logHandle(err)
        ctx.body = util.reMessageFail('操作失败, 数据库异常,'+ err)
    })
}

// 新增 / 编辑 type 信息
exports.addTypeInfo = async (ctx) => {
    console.log(ctx.request.body);
    let data = null;
    let sql = '';
    // 判断是否有 id 有id为编辑 没有为新增
    if (!ctx.request.body.id){
        sql = 'insert into type_info set ?'
        data = ctx.request.body;
    }else {
        sql = 'update type_info set name =? where id = ?'
        data = [ctx.request.body.name, ctx.request.body.id]
    }
    await db.base(sql, data).then(res => {
        if (res.affectedRows >= 1){
            ctx.body = util.reMessageSuccess('请求成功', null)
        }else {
            ctx.body = util.reMessageFail('请求失败')
        }
    }).catch(err => {
        logUtil.logHandle(err)
        ctx.body = util.reMessageFail('操作失败，数据库异常'+ err)
    })
}

exports.delTypeInfo = async (ctx) => {
    let data = [ctx.request.body.id];
    let sql = 'delete from type_info where id= ?'

    await db.base(sql, data).then(res =>{
        if (res.affectedRows >= 1){
            ctx.body = util.reMessageSuccess('请求成功', null)
        }else {
            ctx.body = util.reMessageFail('请求失败')
        }
    }).catch(err => {
        logUtil.logHandle(err)
        ctx.body = util.reMessageFail('操作失败,数据库异常'+ err)
    })
}
