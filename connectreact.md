

###使用 react-redux

 1. 老赵 虽然能力 很强,但是用起来比较麻烦 ,为了方便管理,使用魏和尚来 负责 链接
 2. cnpm i --save react-redux
 3. 忘记 subscribe ,记住 reducer action dispatch 
 4. React-redux 提供了 2个接口 ,Provider , connect 提供  链接的 功能 


----------


###react-redux 的具体使用

 1. Provider 组件应该在最外层,传入store 即可,只用一次.
 2. connect 负责从外部获取组件需要的参数
 3. Connect 可以用装饰起的方式来写


----------
Index.js

```
import React from "react"
import ReactDom from "react-dom"
import { createStore , applyMiddleware ,compose } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import App from "./App"
import { counter} from "./index.redux"

const store = createStore(counter,
    compose(applyMiddleware(thunk),
        window.devToolsExtension?window.devToolsExtension():f=>f))


ReactDom.render(
    (<Provider store = {store}>
        <App />
    </Provider>),
    document.getElementById("root")
    )



```
App.js

```
import React from "react"
import { Button } from "antd-mobile"
import {connect} from "react-redux"
import {addGun,ReduceGun,FakerGun,addGunAsync} from "./index.redux"
class App extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <div>
                <Button type="primary" >现在有机枪{this.props.num}把</Button>
                <Button type="primary"  onClick={this.props.addGun}>申请武器</Button>
                <Button type="primary"  onClick={this.props.ReduceGun}>收缴武器</Button>
                <Button type="primary"  onClick={this.props.FakerGun}>抢武器</Button>
                <Button type="primary"  onClick={ this.props.addGunAsync }>拖2秒</Button>

            </div>
        )
    }
}

const mapStatetoProps = (state)=>{
    return {num:state}
}

const actionCreaters = {addGun,ReduceGun,FakerGun,addGunAsync}

App = connect(mapStatetoProps,actionCreaters)(App)
export default App
```
Index.redux.js

```


const ADD_GUN = "加机关枪"
const REMOVE_GUN = "减机关枪"
const FAKE_GUN = "抢机关枪"


/*reducer*/
export function counter (state=0,action){
    switch(action.type){
        case ADD_GUN:
            return state + 1
        case REMOVE_GUN:
            return state - 1
        case FAKE_GUN:
            return state * 10
        default:
            return 10
    }
}

export function addGun(){
    return {type:ADD_GUN}
}

export function ReduceGun(){
    return {type:REMOVE_GUN}
}

export function FakerGun(){
    return {type:FAKE_GUN}
}

export function addGunAsync(){
    return dispatch=>{
        setTimeout(()=>{dispatch(addGun())},500)
    }
}










```

