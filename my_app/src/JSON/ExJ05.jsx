import { useState, useEffect } from "react";

export default function ExJ05(){
    const[data, setData] = useState([]);
    const[show, setShow] = useState(null);

    const JsonData = () => {
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
    }


    useEffect(()=>{       
        
        const timer = setTimeout(()=>{
            JsonData();
            setShow(true);
        },3000);
        
        return ()=>clearTimeout(timer);
    },[])


    return(
        <> 
            {show ?
                <ul>
                    {data.map((item)=>(
                        <li key={item.id}>{item.name}</li>
                    ))}

                </ul>
            :
                <p>불러오는중...</p>           
            }
        </>
    )
}