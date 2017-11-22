

*块级作用域,字符串,函数
*对象扩展,解构
*类,模块化
>使用let 完全可以替换var ,使用var ,在{}之外是可以找到的,使用let在{}之外是找不到的.

----------
	模版字符串
​	

```
name="imooc";
course = "React 开发 App"
console.log("hello" + name + ",course is" + course)
console.log(`hello ${name},course is ${course}`)
支持中间换行的写法
```
ES6中的函数:
####参数默认值
####箭头函数
####展开运算符
var 不会报错
![var 不会报错](http://img.blog.csdn.net/20171122145605975?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvS2FzZWthbGU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
![这里写图片描述](http://img.blog.csdn.net/20171122145618046?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvS2FzZWthbGU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
let 会报错
![let 会报错](http://img.blog.csdn.net/20171122145630591?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvS2FzZWthbGU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
![这里写图片描述](http://img.blog.csdn.net/20171122145643974?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvS2FzZWthbGU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
*js 也拥有了块级作用于,{}中间的作用域,使用let定义,外部是获取不到的,let可以完全替换var 定义一个变量

```
const name = "experience";
name = "solidadc";
cosole.log(name);

const 定义一个常量,不能给一个常量赋值.
```

```
let name = "experience";
name = "solidadc";
console.log(name);
let 不是定义一个常量,可以赋值.
```

```
/*var 不会报错,但是let会报错*/
// {
//     let name = "experience"
// }
// console.log(name);

/*const 定义一个常量,不能给一个常量赋值.*/
// const name = "experience";
// name = "solidadc";
// cosole.log(name);

/*let 不是定义一个常量,可以赋值.*/
// let name = "experience";
// name = "solidadc";
// console.log(name);

/*模版字符串   中间可以任意换行,都不会报错*/
// name = "experience";
// course = "solidadc";
// console.log("hello " + name +" is course "+course);
// console.log(`hello ${name} is course ${course}`);
//
// console.log(`hello
//
//
// ${name} is course
//
//  ${course}`);

/*箭头函数   简写函数   保持函数的this作用域*/
// function hello(name){
//     console.log(`Hello ${name} !`)
// }
// hello("src");
//
// const hellos = (name)=>{
//     console.log(`Hello ${name} !`)
// }
// hellos("background");
//
// setTimeout (()=>{
//     console.log("xxx")
// },3000)

/*如果{}里,只有一条return语句的话,{}是可以省略不写的!~~*/
// const double =x =>x*2
// console.log(double(5))

/*默认参数*/
// const hello = (name=`girl`) =>{
//     console.log(`Hello ${name}`)
// }
// hello();
// hello("boy");

/*展开符的使用*/
// function hello(name1,name2){
//     console.log(name1,name2);
// }
// arr = ["girl","boy"]
// hello.apply(null,arr)
//
// hello(...arr)

/*对象扩展  Object 扩展   把一个对象压成一个数组  */
// obj = {name: "experience",course: "fairy"}
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

/*对象展开符 的扩展 */
// const obj1 = {name:"experience" ,course:"solidadc"}
// const obj2 = {type:"IT"         ,name:"fairy"}
// console.log({...obj1,...obj2,data:"2017"})

/*数组 解构*/
// const arr =["hello","fairy"]
// let arg1 = arr[0]
// let arg2 = arr[1]

// let[arg1,arg2] = arr
// console.log(arg1,`|`,arg2)

/*对象解构 */
// const obj = {name:"experience",course:"fairy"}
// const {name,course} = obj
// console.log(name,`|`,course)

/*提供class的语法糖
*是 prototype的语法糖
*Extends继承
* Constructor构造函数
*/
// class Myapp {
//     constructor(){
//         this.name = "experience"
//     }
//     sayHello(){
//         console.log(`hello${this.name}!`)
//     }
// }
// const app = new Myapp()
// app.sayHello()

/*ES6中新出现的数据结构
* set元素不可重合
* Map
* Symbol*/

/*ES6中自带了模块化机制,告别sea.js require.js
* import,import{}
* Export,export default
* Node现在还不支持,还需要require来加载
* */

/*未解之谜*/
// import * as mod1 from "./module1"
// console.log(mod1)

/*遍历数组*/
// [1,2,3].forEach(function(value,index){
//     console.log(value);
// });

/*映射新数组*/
arr = [1,2,3].map(v=>v*2);

/*所有元素是否通过测试*/
[1,2,3,4].every(v=>v>3);
/*是否有元素通过测试*/
[1,2,3,4].some(v=>v>3);
/*过滤数组*/
[1,2,3,4,5].filter(v=>v>3);
/*查找符合条件的元素*/
arr = [{name:"xiaoxi",age:"13"},{name:"romio",age:"23"}];
/*查找索引*/
[1,2,3].indexOf(2);
/*连接数组*/
arr1=[1,2,3];
arr2=[4,5,6];
[...arr1,...arr2];
/*数组去重*/
arr = [1,2,3,4,3,2,1];
[...new Set(arr)];
/*获取对象的key*/
Object.keys({name:"experience",age:"43"})
/*获取对象里数据的流量*/
Object.keys({name:"experience",age:"43"}).length;
/*遍历数组*/
Object.entries({name:"experience",age:"43"});
/*extend 功能*/
const obj = {name:"experience",age:"43"};
const newObj = {...obj,job:"IT",age:15};
console.log(newObj)
/*获取列表的头和尾*/
const [head,...tail] = [1,2,3];
const [last,...initial] = [1,2,3].reverse();








```




