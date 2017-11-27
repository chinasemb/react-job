

###subscribe()
```
import { createStore } from "redux"

/*新建stoore
*通过reducer 建立
*根据老的状态和action,生成新的state   */

function counter (state=0,action){
    switch(action.type){
        case "加机关枪":
            return state + 1
        case "减机关枪":
            return state - 1
        case "抢机关枪":
            return state * 1000
        default:
        return 10
    }
}

const  store =  createStore(counter)

/*新建store 结束*/

const init = store.getState()

console.log(init)

function listener(){
    const cur = store.getState()
    console.log(`现在有机枪  ${cur}把`)
}

store.subscribe(listener)

/*  派发事件 传递action    */

store.dispatch({type: "加机关枪"})


store.dispatch({type: "加机关枪"})


store.dispatch({type: "减机关枪"})


store.dispatch({type: "抢机关枪"})

















```

