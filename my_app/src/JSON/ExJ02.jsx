import { useState, useEffect } from "react";

export default function ExJ02(){
    const[title, setTitle] = useState([]);

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((data)=>setTitle(data))
        .finally(()=>console.log('요청완료'));
    },[])

    //얕은복사
    let copyTitle = [...title];

    const contentView = (data) =>{
        alert(data);
    }

    return(
        <div>
            <h3>게시글 5개</h3>
            <ul>
                {/* slice로 배열을 원하는 수만큼 짤라서 노출  */}
                {copyTitle.slice(0,5).map((data,index)=>(
                    <li onClick={()=>contentView(data.body)} key={data.id}>
                        {data.title}
                    </li>
                ))}

            </ul>
        </div>
    )

}