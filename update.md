

后续进阶
>Express和mongodb结合
>*mongodb独立工具函数
>*express使用body-parser 支持post
>*使用cookie-parser存储登录信息cookie

```
const express  = require("express")
const mongoose = require("mongoose")
/*连接mongo  127.0.0.1===localhost    */
//C:\Program Files\MongoDB\Server\3.4\bin>mongod --dbpath=F:\git代码仓库\react-Job\react-job\db --port=27017
const DB_URL   = "mongodb://127.0.0.1:27017"

mongoose.connect(DB_URL)
mongoose.connection.on("connected",function(){
    console.log("Mongo connect success")
})

const User = mongoose.model("user",new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true},
    sex:{type:String,require:true},
    password:{type:String,require:true}
}))

// User.create({
//     user:"mark",
//     age:"18",
//     sex:"boy",
//     password:"shuishui123"
// },function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })

User.update({age:"20"},{"$set":{user:"bengi"}},function(err,doc){
            console.log(doc)
})

// User.remove({age:"16"},function(err,doc){
//         if(!err){
//             console.log("delete success")
//             User.find({},function(e,d){
//                 console.log(d)
//             })
//         }
//
// })




/*新建app*/
const app = express()

app.get("/",function(req,res){
    res.send("<h1>hello world</h1>")
})

app.get("/data",function(req,res){
    User.find({},function(err,doc){
        res.json(doc)
    })
})

app.get("/data2",function(req,res){
    User.find({age:"13"},function(err,doc){
        res.json(doc)
    })
})

app.get("/data3",function(req,res){
    User.find({user:"experience"},function(err,doc){
        res.json(doc)
    })
})

app.get("/data4",function(req,res){
    User.find({user:"solidadc"},function(err,doc){
        res.json(doc)
    })
})



app.listen(9093,function(){
    console.log("node app start at port 9093")
})

```

