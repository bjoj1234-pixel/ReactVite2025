import { useState } from "react";

export default function LoginForm(props){
    //이름
    const[name, setName] = useState('');

    //비밀번호
    const[pw, setPw] = useState('');

    const login = () => {
        if(!name || !pw) return alert('입력해주세요');
        props.onSuccess(name)
    }

    // login 함수 필요
    return(
        <>
            <div className="loginForm">
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="이름을 입력하세요"/>
                <input type="password" value={pw} onChange={(e)=>setPw(e.target.value)} placeholder="비밀번호를 입력하세요"/>
                <button onClick={login}>로그인</button>
            </div>    
        </>

    )

}