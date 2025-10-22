import React,{useState} from "react";

export default function Exstate14(){
    const[now, setNow] = useState(new Date().toLocaleTimeString());

    return(
        <>
            <p>{now}</p>
            <button onClick={()=>{
                setNow(new Date().toLocaleTimeString())
            }}>갱신</button>
        </>
    )
}