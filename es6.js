
// {
// 	var name = "experience"
// }
// console.log(name)

// {let name = "experience"}
//  使用let 定义,使其拥有块级作用域,外部无法获取 变量
// comsole.log(name)

// const name = "experience"
// name ="sss"
// console.log(name)


/*模版字符串的多行换符*/
// name = "experience"
// course = "good"
// console.log("hello "+name+",course is "+course)
// console.log(`hello ${name},course is ${course}`)

// function hello (name){
//     console.log(`hello ${name}  !!!`)
//
// }
// const hello1 =(name)=>{
//     console.log(`hello ${name} !!`)
// }
// hello("ss")
// hello1("ss")

// setTimeout(()=>{
//     console.log("sss")
//
// },2000)

// const double = x =>x*2
// console.log(double(2))

// const hello = (name = "experience")=>{
//     console.log(`hello ${name}`)
// }
// hello()
// hello("experiences")


// function hello (name1,name2){
//     console.log(name1,name2)
// }
//以前的方法
// arr =["experience","faker"]
// hello.apply(null,arr)
// hello(...arr)

// const obj = {name:"experience",course:"react"}
//
// console.log(...Object.keys(obj))
// console.log(...Object.values(obj))
// console.log(...Object.entries(obj)[0],...Object.entries(obj)[1])

//object 对属性key的扩展
// const name = "experience"
// const obj = {
//     name,
//     [name]:"hello sss",
//     hello:function(){
//
//     },
//     hello1(){}
// }

//obj[name]="hello experience"
// console.log(obj)

// const obj1 = {name:"experience",course:"react"}
// const obj2 = {type:"IT",name:"silence"}
// console.log({...obj1,...obj2,data:"20171130"})


//批量赋值
// const arr = ["hello","imooc"]

// let arg1 = arr[0]
// let arg2 = arr[1]
// let [arg1,arg2] = arr
// console.log(arg1,"|",arg2)

//批量赋值 对象篇
// const obj = {name:"experience",course:"react"}
// const {name,course} = obj
// console.log(name,"|",course)

//批量赋值代码结束

//类  coding start

// class MyApp {
//     constructor(){
//         this.name="imooc"
//     }
//     sayHello (){
//         console.log(`hello ${this.name}`)
//     }
// }
// const app = new MyApp ()
// app.sayHello()
import {foo} from "./module1.js"
console.log(foo)













