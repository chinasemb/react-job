

*Redux 是什么
*Redux 的核心概念
*Redux 实战

 1. readux 专注于状态管理,和react 解耦
 2. 单一状态,单向数据流
 3. 核心的概念:store ,state ,action ,reducer 
 4. 人少的时候,无论是兵器还是人员的变更 ,都是setState
 5. 人多的时候,军事和生活分开
 6. 所有状态 归redux管理,
 7. redux有一个 保险箱 (store),在那里都有记录,(state)
 8. 需要改变的时候,需要告诉专员 (dispatch)要干什么(action)
 9. 处理变化的人(reducer) ,拿到state 和 action ,生成新的state 


----------
Redux 的正确使用方法

 1. 首先通过reducer 新建store ,随时通过store.getState获取状态
 2. 需要状态变更,store.dispatch(action)来修改状态
 3. Reducer函数 接受state和action ,返回新的state ,可以用store.subscribe,监听每次修改.


----------
##Index.js
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
        default:
        return 10
    }
}

const  store =  createStore(counter)

/*新建store 结束*/

const init = store.getState()

console.log(init)
```





