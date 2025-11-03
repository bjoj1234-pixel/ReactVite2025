import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//커스텀 훅 => 훅을 제조해서 만든 훅 useProduct()
//커스텀 훅 안에 useState, useEffect, fetch()만으로 구성된 함수
//커스텀 훅이든 이미 존재하는 훅이든 JSX안으로 가져올수 없다
export default function useProduct(){
    //데이터 하나를 받을때는 useState = null 가능, 여러개 받을때는 배열로 지정
    const[loading, setLoading] = useState(true);
    //JSON에서 받아온 데이터 상태저장하는 변수
    const[data, setData] = useState([]);
    const[error, setError] = useState(null);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then((res)=>{
            if(!res.ok){ 
                throw new Error(`에러메시지 ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            setData(data);
            console.log(data);
        })
        .catch((err)=>{
            console.log(`오류 : ${err.message}`);
            setError(err.message);
        })
        .finally(()=>{
            console.log('요청완료');
            setLoading(false);
        })
    },[])

    // JSON에서 받아온 data상태변수를 return을 이용하여 반환하여 준다.
    return data;
}