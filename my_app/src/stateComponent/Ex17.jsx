import React,{useState} from "react";

export default function Exstate17(){
    const[fontChange, setFontChange] = useState({color: '#000', fontSize: 14})

    return(
        <>
          <p style={{color:fontChange.color, fontSize:fontChange.fontSize + 'px'}}>변하는 글자!</p>
          <button onClick={()=>{
            setFontChange({color: 'red', fontSize: fontChange.fontSize + 2})
          }}>변화!</button>
        </>
    )
}