import React,{useState} from "react";

export default function Exstate13(){
    const[reset, setReset] = useState('');

    return(
        <>
            <input type="text" value={reset} onChange={(e)=>{
                setReset(e.target.value)
            }} />
            <button onClick={()=>{setReset('')}}>초기화</button>
            <p>{reset}</p>
        </>
    )
}