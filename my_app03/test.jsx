import { useEffect } from "react";
//반드시 axios는 import해야한다.
import axios from "axios";
import { useState } from "react";

export default function Test(){
    const[data, setData] =useState([]);

    //fetch방식을 쓰건 axios 방식을 쓰건 아무거나 쓰면 된다.(데이터 불러오기)
    useEffect(()=>{
        //load(작명)라는 비동기 함수를 만들어서 API요청
        const load = async() =>{
            try{
                //axios.get()을 이용해 API 호출한다.
                //async() ~~~ await axios.get(URL)
                const res = await axios.get('https://dummyjson.com/products?limit=20');
                console.log(res.data);
                setData(res.data.products);
            }catch(err){
                console.log('상품데이터 요청 실패:',err);
            }finally{
                //로딩이 성공/실패하든 무조건 실행
                console.log('요청 완료');
            }
        }
        //반드시 작성한 함수를 호출해야한다.
        load();
    },[])

    return(
        <>
            <ul>
                {data.map((item)=>(
                    <li key={item.id}>
                       {item.title} 
                    </li>
                ))}
            </ul>
        </>
    )
}