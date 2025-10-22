import React,{ useState } from "react"

export default function Exstate02(){
    //input의 onChange()함수 이용해 작성
    //element.target.value = e.target.value
    // => input입력한 값을 가져올 수 있다.

    const[text, setText] = useState('')

    return(
        <>
            <input type="text" placeholder="입력하세요" onChange={(e)=>{
                setText(e.target.value)
            }}/>
            <p>입력한 내용: {text}</p>
        </>
    )
}