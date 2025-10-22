import React,{useState} from "react";

export default function Exstate08(){
    
    const[status, setStatus] = useState(true);
    
    return(
        <>
            <p>
                {status === true ? '좋아요 👍':'싫어요 👎'}
            </p>
            <button type="button" onClick={()=>{setStatus(!status)}}>변경</button>
        </>
    )
}