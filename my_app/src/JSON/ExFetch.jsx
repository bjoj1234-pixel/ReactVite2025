import { useState, useEffect } from "react";

export default function ExFetch(){
    const[loading, setLoading] = useState(true);
    //JSON에서 받아온 데이터 상태저장하는 변수
    const[data, setData] = useState([]);
    const[error, setError] = useState(null);

    //JSON 데이터는 처음 1회만 실행하도록(안그러면 계속 무한으로 받아옴)
    useEffect(()=>{
        //비동기로 네트워크에 접속해서 데이터를 요청
        fetch('https://jsonplaceholder.typicode.com/users')
        //res(Response(응답)객체의 res.json() 응답받은 데이터의 파싱(해석)
        .then((res)=>{
            //res.ok->에러체크(boolean 데이터 타입)
            //데이터가 오류아님 res.ok=true (200 ~ 299)
            //데이터가 오류임 res.ok=false
            //HTTP 400/500 에러를 fetch가 잡지 못함.
            //데이터가 오류아님 res.ok=true
            //res.status 지금 현재 오류 상태가 출력됨
            //예)404
            if(!res.ok){ 
                throw new Error(`에러메시지 ${res.status}`)
            }
            //return res.json() =>파싱
            return res.json()
        })
        //catch는 res.ok의 에러 체크부분이 없으면 출려되지 않음
        .then((data)=>{
            setData(data);
            console.log(data);
        })
        .catch((err)=>{
            console.log(`오류 : ${err.message}`);
            setError(err.message)
        })
        .finally(()=>{
            console.log('요청완료');
            setLoading(false);
        })
    },[])


    if(loading){
        return <p>데이터 불러오는 중....</p>
    }
    if(error){
        return <p>에러: {error}</p>
    }
    

    return(
        <>
            <div>
                <h2>사용자 목록</h2>
                <ul>
                    {data.map((item)=>(
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}