import { useState } from 'react'
//import Button from "../Button/Button"

const Counter = (initial, title) => {
    const [count, setCount] = useState(1)

     
    const decrement = () => {
        setCount(count - 1)
        
    }

    const increment = () => {
            setCount(count + 1)
    }
        
    const reset = () => {
        setCount(initial)
    }
    return(
        <div>
            <h1>{title}</h1>
            <button onclick={decrement}>-</button>
            <h2>{initial}</h2>
            <button onclick={increment}>+</button>  
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Counter