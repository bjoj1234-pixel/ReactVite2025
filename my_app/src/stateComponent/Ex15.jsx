import React,{useState} from "react";

export default function Exstate15(){
    const [name, setName] = useState("홍길동");
    const [age, setAge] = useState(20);

    return(
        <>
          <p>{name}{age}</p>
          <button onClick={()=>{
            setName("이순신")
            setAge(30)
          }}>정보변경</button>
        </>
    )
}