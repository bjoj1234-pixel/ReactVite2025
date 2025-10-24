import React,{useState} from "react";

export default function Parent(){ 
    const [open, setOpen] = useState(false);

    return(
        <>
            <Child Toggle={()=>setOpen(true)} />
            {open && (
            <div>
                <div>
                    <h2>모달창입니다.</h2>    
                    <button onClick={()=>setOpen(false)}>닫기</button>
                </div> 
            </div>
            )}
        </>
    )
}

function Child(props){
    return <button onClick={props.Toggle}>열기</button>
}