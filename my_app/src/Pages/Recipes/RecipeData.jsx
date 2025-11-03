import { useState, useEffect } from "react";

export default function RecipeData(){
    //데이터 하나를 받을때는 useState = null 가능, 여러개 받을때는 배열로 지정
    const[loading, setLoading] = useState(true);
    //JSON에서 받아온 데이터 상태저장하는 변수
    const[data, setData] = useState([]);
    const[error, setError] = useState(null);

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes')
        .then((res)=>{
            if(!res.ok){ 
                throw new Error(`에러메시지 ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            //★★★엔드포인트(주소의 맨끝에 오는것을 꼭적어줘야 데이터를 불러올수 있는경우가 종종 있음)
            //https://dummyjson.com/recipes <--
            setData(data.recipes);
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