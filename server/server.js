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
    age:{type:Number,require:true}
}))

User.create({
    user:"experience",
    age:"13"
},{
    user:"experience",
    age:"13"
},function(err,doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})

User.create({
    user:"experience",
    age:"3"
},function(err,doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})

User.create({
    user:"experience38",
    age:"38"
},function(err,doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})




/*新建app*/
const app = express()

app.get("/",function(req,res){
    res.send("<h1>hello world</h1>")
})

app.get("/data",function(req,res){
    res.json({name:"experience",type:"fairy"})
})

app.listen(9093,function(){
    console.log("node app start at port 9093")
})
