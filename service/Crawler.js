const http=require('http')
const url=require('url')
// const storer=require('./Storer')

function fetch(sourceUrl,callback) {
   let obj= url.parse(sourceUrl)
    const options = {
        host: obj.hostname,
        port: obj.port,
        path: obj.path
    };
   console.log(options)

    // 发出请求。
    const req = http.request(options);

    req.end();
    let result='';
    req.on('response', (info) => {
        info.on('data',function (chunk) {
            result=result+chunk.toString("UTF-8")
        })
        info.on('end',()=>{
            let albums=JSON.parse(result)
            callback(null,albums)
        })
    });
    req.on('error',function (error) {
        callback(error)
    })
}

 module.exports={fetch}