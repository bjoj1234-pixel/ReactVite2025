import { useState,useEffect } from "react";

export default function Eff02(){
    const[count, setCount] = useState(0);

    //Effect의 의존성 배열을 지정하지 않고 작성
    //=> 랜더링 될때마다 useEffect가 실행됨(버튼 누를때마다 계속 실행됨)
    useEffect(()=>{
        console.log('렌더링 발생');
    })

    return(
        <div>
            <p>카운트</p>
            <button onClick={()=>setCount(count+1)}>+1</button>
        </div>
    )
}