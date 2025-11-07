import { useContext,useState } from "react";
import { AuthContext } from "../Context/AuthContext";
//useNavigate import 한다.
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
    // id, pw 상태 저장 변수 생성
    const[id, setId] = useState('');
    const[pw, setPw] = useState('');
    const{login} = useContext(AuthContext);

    //useNavigate 훅을 변수로 정의 해준다.
    const navigate = useNavigate();

    // id='admin'이면서 pw='1234' 로그인 성공
    // 로그인 성공시 alert(로그인 성공)
    // 그리고  home페이지로 이동

    // 아니면 'id, pw확인하세요'

    const loginHandler = (id, pw) =>{
        if(id === 'admin' && pw === '1234'){
            login(id);

            navigate('/');

            //navigate(-1); //현재 페이지 보다 한단계 이전 페이지로 이동
            //navigate(1); //현재 페이지 보다 한단계 앞 페이지로 이동
            //navigate(0); //새로고침
            
            // (단 history: 들어갔던 내역이 존재해야함)

            //논리 구현함수안에 <Link to=''> 사용금지
        }else{
            alert('id,pw확인하세요');
        }
    }

    return(
        <div>

            <input type="text"  onChange={(e)=>setId(e.target.value)} value={id} placeholder="아이디"/>
            <input type="password" onChange={(e)=>setPw(e.target.value)} value={pw} placeholder="비밀번호"/>
            <button type="button" onClick={()=>loginHandler(id,pw)}>확인</button>
        </div>
    )

}