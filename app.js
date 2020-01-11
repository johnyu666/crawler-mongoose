let storer=require('./service/Storer')
let crawler=require('./service/Crawler')

crawler.fetch("http://johnyu.cn:3000/albums",function (albums) {
     storer.addAlbums(albums,function (err,newAlbums) {
         if(!err) console.log(newAlbums)
     })
})