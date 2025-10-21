//useState() 훅(hook)을 import한다.
import React,{useState} from "react";

//한번에 컴포넌트 생성 + Export까지 완성
export default function Counter02(){
// useState()훅 이용하여 변수지정
// const [이름, set이름] = useState(초기값)
    const [count, setCount] = useState(0) //초기값 0지정
    
    // 함수로 작성하기 : count되는 함수
    function countNum(){
        // count는 변수이고, setCount는 변수가 아님
        setCount(count + 1);
    }
    //화살표 함수로 구현
    // const countNum = ()=>{
    //     setCount(count + 1);
    // }

    return(
        <>
            <div>
                <p>카운트:{count}</p>
                
                {/* <button onClick={()=>setCount(count+1)}>증가</button> */}
                <button onClick={countNum}>증가</button>
            </div>
        </>
    )
}