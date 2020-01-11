
const storer=require('../service/Storer')
const assert=require('assert')
describe("测试存储模块",function () {
    it("测试将数据入库",function (done) {
        let mm=[
            {
                album_id: "3751508",
                album_name: "A.I. 爱",
                public_time: "2017-12-11",
                week: 50,
                price: 89,
                cover: "http://imgcache.qq.com/music/photo/album_300/08/300_albumpic_3751508_0.jpg",
                singers: [
                    {
                        singer_id: "265",
                        singer_name: "王力宏"
                    }
                ]
            },
            {
                album_id: "3766916",
                album_name: "Pay the Man (Remix)",
                public_time: "2017-12-13",
                week: 50,
                price: 78,
                cover: "http://imgcache.qq.com/music/photo/album_300/16/300_albumpic_3766916_0.jpg",
                singers: [
                    {
                        singer_id: "28132",
                        singer_name: "Foster The People"
                    },
                    {
                        singer_id: "191884",
                        singer_name: "J.I.D"
                    },
                    {
                        singer_id: "173561",
                        singer_name: "Saba"
                    }
                ]
            }]
        storer.addAlbums(mm,function (err,newAlbums) {
            console.log(newAlbums)
            assert.ok(newAlbums[0].album_id=="3751508")
            done()
        })
        
    })
})