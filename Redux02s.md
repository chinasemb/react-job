

##Redux 和React 如何一起使用
*把store.dispatch 方法传递给组件 ,内部可以调用修改状态
*Subscribe 订阅 render 函数 ,每次修改都重新渲染 
*Redux相关文件 , 移动到  单独文件 index.redux.js
###index.js

```
import React from "react"
import ReactDom from "react-dom"
import { createStore } from "redux"
import App from "./App"
import { counter } from "./index.redux"

const store = createStore(counter)
function render (){

    ReactDom.render(<App store = {store} />,document.getElementById("root"))

}
render ()
store.subscribe(render)
```
###App.js

```
import React from "react"
import { ADDGUN } from "./index.redux"
import { Button } from "antd-mobile"

class App extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        const store = this.props.store
        const num = store.getState()
        return(
            <div>
                <h1>现在有机枪{num}把</h1>
                <Button type="danger" onClick={()=>store.dispatch( ADDGUN())}>申请武器</Button>
            </div>
        )
    }
}

export default App
```

###index.redux.js

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
            return state * 1000
        default:
            return 10
    }
}

export function ADDGUN(){
    return {type:ADD_GUN}
}

export function REMOVEGUN(){
    return {type:REMOVE_GUN}
}

export function FAKEGUN(){
    return {type:FAKE_GUN}
}

```

