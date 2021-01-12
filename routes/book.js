const router = require('koa-router')()
const bookService = require('../service/bookService')
router.prefix('/books')

router.get('/', function (ctx, next) {
    ctx.body = 'this is a books response!'
  })  

// 添加书籍
router.post('/addbook', bookService.addBook)


// 添加书籍
router.get('/getbooks', bookService.getBookInfo)  
module.exports = router