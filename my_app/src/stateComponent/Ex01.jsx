import React,{ useState } from "react"

export default function Exstate01(){

    const[toggle, setToggle] = useState('안녕하세요');

    function toggleClick(){
        setToggle(toggle === '안녕하세요' ? 'Hello' : '안녕하세요')
    }

    return(
        <>
            <button onClick={toggleClick}>
                {toggle}
            </button>

            {/* 이렇게 태그안에 function 직접써도 됨 */}
            {/* <button onClick={()=>{
                setToggle(toggle === '안녕하세요' ? 'Hello' : '안녕하세요')
            }}>{toggle}</button> */}
        </>
    )
}