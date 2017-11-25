

###事件 
####Onclick 点击事件
*JSX 里 ,onClick = {this.函数名}来绑定事件
*this引用的问题,需要在构造函数里,用bind 绑定this .
*thsi.setState 修改state ,记得返回新的state ,而不是修改

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
            // this.addFans = this.addFans.bind(this)
        }
        addFans (){
            console.log("hello fansBoys!!")
            this.setState({
                fansBoys:[...this.state.fansBoys,"experience"+Math.random()]
            })
        }
        render (){

            return(
                    <div>
                        <h2>SKT队长,{this.props.Ap}</h2>
                        <button onClick={()=>this.addFans()}>Come on fansBoys !!!</button>
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




