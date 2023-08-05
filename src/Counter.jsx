import { useState } from "react";

export function Counter(){
    const [counter, setCounter] = useState(0)
    function handleClick(){
        setCounter(currentCounter => {
            return currentCounter + 1
        });
    }
    return (
        <div onClick={handleClick}>Counter: {counter}</div>
    )
}