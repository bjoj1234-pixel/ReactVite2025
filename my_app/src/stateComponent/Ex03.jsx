import React,{ useState } from "react"

export default function Exstate03(){


    const[color, setColor] = useState('orange');

    return(
        <>
            <div style={{width:'150px',height:'150px',backgroundColor:color}}>
                <button onClick={()=>{
                    setColor(color === 'orange' ? 'skyblue' : 'orange')}}>색 변경</button>
            </div>
        </>
    )
}