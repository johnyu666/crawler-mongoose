const crawler=require('../service/Crawler')
const assert=require('assert')
describe("测试爬虫模块",function () {
    it("测试从http://johnyu.cn:3000/albums",function (done) {
        crawler.fetch("http://johnyu.cn:3000/albums",function (err,nb) {
            assert.ok(err==null)
            assert.ok(Array.isArray(nb))
            assert.ok(nb.length>0)
            done()
        })
    })

})