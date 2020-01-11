const mongoose=require('mongoose')
let albumSchema={
    album_id:String,
    album_name:String,
    week:Number,
    price:Number,
    cover:String,
    singers:[]
}
mongoose.connect('mongodb://localhost/demo03', { useUnifiedTopology: true ,useNewUrlParser: true },function (err) {
    if(!err) console.log("success")
})
let albumModel=mongoose.model("Album",albumSchema)
function addAlbums(albums,callback){
    albumModel.create(albums,function (err,newAlbums) {
        if(!err){
            callback(null,newAlbums)
            mongoose.disconnect()
        }
        else{
            callback(err)
            mongoose.disconnect()
        }
    })
}
module.exports={addAlbums}
