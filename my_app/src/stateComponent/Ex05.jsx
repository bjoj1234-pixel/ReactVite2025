import React,{use, useState} from "react";

export default function Exstate05(){
    
    const[img, setImg] = useState(true)

    const imgShow = () => {
        setImg(!img);
    }

    return(
        <>
            <button type="button" onClick={imgShow}>이미지 토글</button>
            
            {img && <img src="/vite.svg" alt="#" />} 
            {/* 두개가 true일때만 보여짐  */}
        </>
    )
}