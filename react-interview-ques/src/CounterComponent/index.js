import React, { useEffect, useState } from "react";

const CounterComponent = () =>{
    const [count,setCount] = useState(0)
    const [direction,setDirection] = useState(1)
    useEffect(()=>{
        if(count === 0 && direction === -1){
            return
        }
       const timerId = setTimeout(()=>{
        setCount(prevState => {
            if(prevState === 5){
                setDirection(-1)
            }
            return prevState + direction
        }
            
           )
       return ()=> clearTimeout(timerId)
       },2000) 

    },[count])
return(
    <div>
        <button>Click on Count {count}</button>
    </div>
)
}

export default CounterComponent;