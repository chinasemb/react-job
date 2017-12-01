```
const express = require("express")
const mongoose = require("mongoose")
const app = express()

//连接mongodb
const DB_URL = "mongodb://127.0.0.1:27017"
mongoose.connect(DB_URL)
mongoose.connection.on("connected",function(){
    console.log("mongoose connect success")
})

//定义文档模型 类似于 mysql 的表    mongo里有文档,字段的概念
const User = mongoose.model("user",new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))
// User.create({user:"ludashi",
//             age:14},function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
// User.remove({user:"faker"},function(err,doc){
//     console.log(doc)
// })
// User.update({"user":"clearlove"},{"$set":{age:2}},function(err,doc){
//     console.log(doc)
//
// })


app.listen(9093,function(){
    console.log("NodeApp start at port 9093")
})

app.get("/",function(req,res){
    res.send("<h1>welcome to react</h1>")
})
app.get("/data",function(req,res){
    res.json({name:"experience",type:"IT"})
})

app.get("/safe",function(req,res){
    User.find({},function(err,doc){
        return res.json(doc)
    })

})


















```