var express = require('express')
var music = require('qd-data').Others.Music //引入第三方插件
var app = express()//把express()赋值给变量app
///当用户访问网站的根目录时 执行此处的回调函数
/**
 * 参数一 路由地址(在浏览器中访问的路径)
 * 此处的参数二 表示访问此地址时候的回调函数
 *  req request     请求,客户端发送给服务器的内容
 *  res response    响应,服务器端向客户端发送的内容
 */
app.get('/api/v1/all',function(req,res){
    var key = '好久不见'//默认值
    if(req.query.key){ //判断是否存在,如果存在就赋值
        key = req.query.key
    }
    //req.query获取浏览器url中传递的参数,是一个对象
    // console.log(req.query)
    // console.log(req)
    // res.send('<h1>Hello 小白!</h1>')//输出内容
    // 关于第三方插件的使用方法可以直接参考插件说明文件即可
    // 如果对插件的源码有兴趣,可以查看阅读源码
    music.getSongsSearch(function(data){
        // console.log(data)
        res.json(data)
    },key,2)
    // var obj = {}
    // obj.name = '小明'
    // obj.age = 18
    // res.json(obj)//返回一个json格式的数据
})

//在指定目录中的内容可以当作网站的静态资源被直接访问到
//  如:http://localhost:3003/xx.html
app.use(express.static('public'))//创建静态资源目录

//启动服务器监听指定的端口,端口号可以自行修改
app.listen(3003,function(){
    console.log('服务器运行于3003端口')
})
