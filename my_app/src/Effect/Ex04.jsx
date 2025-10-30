import { useState, useEffect } from "react";

export default function Ex04(){
    const[sec, setSec] = useState(0);

    useEffect(()=>{
        //setInterval(()=>{},초) => 중괄호를 반드시 넣어야됨.
        const time = setInterval(()=>{setSec(sec+1)},1000);

        return ()=>{clearInterval(time)}
    })

    return(
        <> 
            <div>
                <h1>자동 타이머</h1>
                <p>{sec}</p>
                <p>초가 경과했습니다.</p>
            </div>
        </>
    )
}