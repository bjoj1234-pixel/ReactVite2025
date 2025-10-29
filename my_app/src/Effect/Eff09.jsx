import { useState,useEffect } from "react";


export default function Eff09(){
    //불러온 데이터
    const[data, setData] = useState([]);
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    return(
        <div>
            <button>데이터 불러오기</button>
            <ul>
                    {data.slice(1,10).map((item)=>(
                        <li key={item.id}>
                            {item.title}
                        </li>
                    ))}

            </ul>
       </div>
    )
}