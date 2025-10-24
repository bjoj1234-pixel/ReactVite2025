import React,{useState} from "react";

//prompt("당신의 이름을 입력하세요","홍길동")
//1. 첫번째 인자: 사용자에게 보여줄 메시지
//2. 두번째 인자: 입력창의 기본값
//3. 사용자가 [확인]클릭하면 입력한 문자열을 반환
//4. 사용자가 [취소]클릭하면 입력하면 null 반환


export default function PromptChange(){    // 로그아웃 상태임
    const[name, setName] = useState('')

    const handlerClick = () =>{
        const userName = prompt('당신의 이름을 입력하세요','홍길동')
        
        if(userName){
            setName(userName)
        }else{
            alert('이름 입력이 취소되었습니다.')
        }
    }

    return(
        <>
            <div style={{padding:'20px'}}>
                <h2>이름 : {name}</h2>
                <button onClick={handlerClick}>이름 입력</button>
            </div>            
        </>
    )
}