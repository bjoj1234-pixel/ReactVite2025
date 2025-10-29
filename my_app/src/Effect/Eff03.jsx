import { useState,useEffect } from "react";

//*콘솔창에 맨처음 두줄은 => 무조건 코드상에있는 콘솔명령을 다 실행시켜줌. 그래서 나오는거임, 세번째줄부터가 진짜 출력되는 콘솔이라고 보면됨
function Message(){
    //useEffect 의존성 빈배열
    useEffect(()=>{
        console.log('Message 컴포넌트 나타남');
        //CleanUp함수 => 언마운트 될때 실행되는 함수
        //언마운트: 업데이트가 끝났을때
        return(()=>console.log('Message 컴포넌트 사라짐'))
    },[])

    return <p>안녕하세요</p>
}

export default function Eff03(){
   
    const[show, setShow] = useState(true);

    return(
        <div>
            <button onClick={()=>setShow(!show)}>토글</button>
            {show && <Message />}
        </div>
    )
}