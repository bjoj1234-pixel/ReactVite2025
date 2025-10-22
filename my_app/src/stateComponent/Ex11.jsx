import React,{useState} from "react";

export default function Exstate11(){
    const[bgcolor, setBgcolor] = useState('transparent')

    return(
        <>
            <div style={{backgroundColor:bgcolor, width:"250px", height:"150px"}}>
                
                <input type="text" placeholder="예:pink" onChange={(e)=>{
                    setBgcolor(e.target.value)
                }} />
                
            </div>
        </>
    )
}