import React,{useState} from "react";

export default function Exstate06(){

    const[fontsize, setFontsize] = useState(12);

    const sizeUp = () =>{
        setFontsize(fontsize + 3);
    }
    
    return(
        <>
            <p style={{fontSize: fontsize+'px'}}>커지는 글씨!</p>
            <button type="button" onClick={sizeUp}>크게</button>
        </>
    )
}