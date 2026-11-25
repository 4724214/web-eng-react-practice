import { useState } from "react";
 
export function oldCounter() {
    let count = 0;
    function handleClick() {
        count = count + 1;
        console.log(count);
    }
    return <button onClick={handleClick}>{count}回</button>
}

export function Counter() {
    const [count, setCount] = useState<number>(0);
    function handleClick() {
        setCount(count + 1);
    }
    return <button onClick={handleClick}>{count}回</button>
}