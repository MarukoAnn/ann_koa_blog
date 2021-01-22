/**
 * autor: moonshine
 * @sub:此模块路由作为后端博客路由
 */
const router = require('koa-router')()
const flagService = require('../service/admin-blog/flagService')
const typeService = require('../service/admin-blog/typeService')
router.prefix('/admin')
// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })
/**
 *
 * falg标签的增删查改
 *
 * */

// 查询flag
router.get('/getFlag', flagService.getFlagInfoList)

// 新增flag
router.post('/editFlag', flagService.addFlagInfo)

// 删除 falg
router.get('/delFlag', flagService.delFlagInfo)

/**
 *
 * type类型的增删查改
 *
 * */

// 查询类型
router.get('/getType', typeService.getTypeList)
// 新增或者修改类型
router.post('/editType', typeService.addTypeInfo)
// 删除类型
router.post('/delType', typeService.delTypeInfo)

module.exports = router
