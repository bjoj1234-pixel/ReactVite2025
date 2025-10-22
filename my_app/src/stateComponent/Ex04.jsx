import React,{useState} from "react";

export default function Exstate04(){
    
    const[count, setCount] = useState(0);

    const countPlus = ()=>{
        setCount(count + 1);
    }

    return(
        <>
            <p>👍{count}</p>
            <button type="button" onClick={countPlus}>좋아요</button>
        </>
    )
}