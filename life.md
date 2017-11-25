

###React 组件有若干钩子函数,在组件不同的状态执行
>初始化周期
>组件重新渲染 生命周期
>组件卸载生命周期
>![这里写图片描述](http://img.blog.csdn.net/20171125123524828?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvS2FzZWthbGU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

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
        componentWillMount(){
            console.log("组件马上就要加载了!")
        }
        componentDidMount(){
            console.log("组件加载完毕!")
        }
        addFans (){
            console.log("hello fansBoys!!")
            this.setState({
                fansBoys:[...this.state.fansBoys,"experience"+Math.random()]
            })
        }
        render (){
            console.log("组件正在加载!!")
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

