

>组件之间用props 传递数据
>***使用<组件 数据="值" > 的形式传递
>***组件里使用this.props获取值
>***如果组件里只有render函数 ,还可以用函数的形式写组件

```
import React from "react"

class App extends React.Component{
    render(){
        const leader = "Kormma!!!"
        return (
            <div>
                <h4>魔鬼队伍SKT T1 ,Coach {leader}</h4>
                <Faker ></Faker>
                <Bang ADC = "Bang" ></Bang>
                <Bengi></Bengi>
                <Impact></Impact>
                <Wolf></Wolf>
                <EDG leader = "ClearLove"></EDG>
            </div>
        )
    }
}

class Faker extends React.Component{
    render(){
        const leader = "李湘菏!!!"
        return <h2>AP Carry,{leader}</h2>
    }
}

class Bang extends React.Component{
    render(){
        // const leader = "Bang!!!"
        return <h2>AD Carry,{this.props.ADC}</h2>
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

function EDG (props){
    return <h5>EDG 队长 ,{props.leader}</h5>
}














export default App
```

