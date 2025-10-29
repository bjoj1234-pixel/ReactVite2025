import { useState,useEffect } from "react";


export default function Eff05(){
    const[time, setTimer] = useState(0);
    

    useEffect(()=>{
        const timer = setInterval(()=>setTimer(time+1), 1000);
        console.log('1초마다 실행');
        //CleanUp함수필요
        return () => clearInterval(timer)//이전 초가 지워지고 새로 써지기 위해 clearInterval을 씀
    });
    
    

    return(
        <div>
            <p>{time}초마다 실행</p>
        </div>
    )
}