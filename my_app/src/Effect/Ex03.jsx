import { useState, useEffect } from "react";

export default function Ex03(){
    const[count, setCount] = useState(0);

    useEffect(()=>{
        console.log(`현재 카운트: ${count}`);

    },[count])

    //[-]핸들러
    const minusHandeler = () =>{
        setCount(count-1);
    }
    //[+]핸들러
    const plusHandeler = () =>{
        setCount(count+1);
    }

    return(
        <> 
            <h3>Counter with useEffect</h3>
            <button type="button" onClick={minusHandeler}>-</button>
            <span>{count}</span>
            <button type="button" onClick={plusHandeler}>+</button>

            <p>콘솔을 확인하세요! 카운트가 변경될때마다 로그가 출력됩니다.</p>
        
        </>
    )
}