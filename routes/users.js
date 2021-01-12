const router = require('koa-router')()
const userService = require('../service/userService')
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/getuser',  userService.getUserInfo)

module.exports = router
