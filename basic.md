

>react 是什么 ?
>   ***帮助你构建UI  的库
>^Facebook 出品,专注view层
>^一切皆组件
>^全部使用ES 6语法

----------
React16是第一个核心代码 重写的版本 ,整体API  变化不大 

```
npm install --save react@next react-dom@next 	
```
###React 基础语法
React 的Hello world 
*import react 
*class语法新建组件,render里直接使用.
*render函数返回值就是输出JSX语法,会把JSX 转成js来执行.
![这里写图片描述](http://img.blog.csdn.net/20171124224838778?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvS2FzZWthbGU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
###Jsx的基本语法
*React 的View层语法 
**js里直接写html
**Class要写成 ClassName 
**变量要用{}包裹
***一切都是组件
***通过属性传递  实现组件通信 
***类实现组件 ,使用JSX  语法 

```
import React from "react"

class App extends React.Component{
    render(){
        const leader = "Kormma!!!"
        return (
            <div>
                <h2>魔鬼队伍SKT T1 ,Coach{leader}</h2>
                <Faker></Faker>
                <Bang></Bang>
                <Bengi></Bengi>
                <Impact></Impact>
                <Wolf></Wolf>
            </div>
        )
    }
}

class Faker extends React.Component{
    render(){
        const leader = "李湘菏!!!"
        return <h2>队长,{leader}</h2>
    }
}

class Bang extends React.Component{
    render(){
        const leader = "Bang!!!"
        return <h2>队员,{leader}</h2>
    }
}

class Bengi extends React.Component{
    render(){
        const leader = "Bengi!!!!"
        return <h2>打野,{leader}</h2>
    }
}

class Impact extends React.Component{
    render(){
        const leader = "Impact"
        return <h2>上单,{leader}</h2>
    }
}

class Wolf extends React.Component{
    render(){
        const leader = "Wolf"
        return <h2>辅助,{leader}</h2>
    }
}

export default App
```

