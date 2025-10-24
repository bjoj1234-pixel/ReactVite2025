import { useState } from "react";

//자식 컴포넌트로 회원가입 창
export default function SignupForm(props){
    //이름
    const[name, setName] = useState('');

    //비밀번호
    const[pw, setPw] = useState('');

    //회원가입 함수
    const signup = () => {
        //예외처리
        if(!name || !pw){
            return alert('입력해주세요')
        }
        props.onSuccess(name)
    }

    //가입폼 화면 그리기
    return(
        <>
            <div className="signForm">
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="이름을 입력하세요"/>
                <input type="password" value={pw} onChange={(e)=>setPw(e.target.value)} placeholder="비밀번호를 입력하세요"/>
                <button onClick={signup}>회원가입</button>
            </div>
        </>
    )


}