import { createStore } from "redux"
import reducer from "./Reducer"
import { decrementLike, incrementLike } from "./Actions"
import { useState } from "react"
import "./App.css"

const store = createStore(reducer)


function LikeCounter() {

    const [count,setLike] = useState(0)

    store.subscribe(() => setLike(store.getState().count))



  return (
    <div className="container">
        <div className="like">Likes: {count}</div>
        <div><button onClick={() => store.dispatch(incrementLike())}>Like</button>
        <button onClick={() => store.dispatch(decrementLike())}>Unlike</button></div>
    </div>
  )
}

export default LikeCounter