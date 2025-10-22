import React,{useState} from "react";

export default function Exstate16(){
    const [user, setUser] = useState({ name: "철수", age: 25 });

    return(
        <>
          <p>{user.name} - {user.age}</p>
          <button onClick={()=>{
            setUser({name: user.name , age: user.age + 1})
          }}>나이 +1</button>
        </>
    )
}