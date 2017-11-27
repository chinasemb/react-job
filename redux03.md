

index.js

```
import React from "react"
import ReactDom from "react-dom"
import { createStore } from "redux"
import App from "./App"
import { counter,addGun ,ReduceGun,FakerGun} from "./index.redux"


const store = createStore(counter)
function render (){

    ReactDom.render(<App store = {store} addGun = {addGun} ReduceGun = {ReduceGun}FakerGun = {FakerGun} />,document.getElementById("root"))

}
render ()
store.subscribe(render)
```
App.js

```
import React from "react"
import { Button } from "antd-mobile"

class App extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        const store = this.props.store
        const num = store.getState()
        const addGun = this.props.addGun
        const ReduceGun = this.props.ReduceGun
        const FakerGun = this.props.FakerGun
        return(
            <div>
                <h1>现在有机枪{num}把</h1>
                <Button type="primary"  onClick={()=>store.dispatch( addGun())}>申请武器</Button>
                <Button type="primary"  onClick={()=>store.dispatch( ReduceGun())}>收缴武器</Button>
                <Button type="primary"  onClick={()=>store.dispatch( FakerGun())}>抢武器</Button>
            </div>
        )
    }
}

export default App
```
index.redux.js

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

```

