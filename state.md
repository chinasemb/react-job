

###组件内部通过state 管理状态
####JSX  本质就是js ,所以直接 数组.map 渲染列表
####Constructor设置初始状态,记得执行super ,(props)
####State就是一个不可变的对象,使用this.state 获取

```
import React from "react"

class App extends React.Component{
    render(){
        const leader = "Kormma!!!"
        return (
            <div>
                <h4>魔鬼队伍SKT T1 ,Coach {leader}</h4>
                <Faker AP = "Faker"></Faker>
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

        constructor(props){
            super(props)
            this.state = {
                fansBoys:["Scout","Peanut","Rookie"]
            }
        }

        render (){

            return(
                    <div>
                        <h2>SKT队长,{this.props.Ap}</h2>
                        <ul>
                            {this.state.fansBoys.map(v=>{
                            return <li key={v}> {v} </li>
                            })}
                        </ul>
                    </div>
                )
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

