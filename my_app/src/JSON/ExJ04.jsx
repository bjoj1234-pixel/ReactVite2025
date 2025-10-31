import { useState, useEffect } from "react";

export default function ExJ04(){
    const[data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            if(!res.ok){
                throw new Error(`에러메시지 ${res.status}`)
            }
            return res.json();
        })
        .then((data)=>setData(data))
        .catch((err)=>console.log(`오류 : ${err.message}`))
        .finally(()=>{console.log('요청완료')});
    },[])

    return(
        <>
            <UserList data={data}/>
        </>
    )
}

function UserList(props){
    return(
        <>
            <ul>
                {props.data.map((item)=>(
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>   
        </>
    )
}