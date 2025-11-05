import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Loginform(){
    const{user,setUser, login} = useContext(AuthContext);

    //로그인 사용자 정보 저장
    const[username, setUsername] = useState('');

    //폼 제출시 실행되는 함수
    //form => submit
    const submitHandler = () =>{
        //기본 폼 제출(새로고침) 막는 코드
        //e.preventDefault();

        //입력값이 공백이면 alert() 경고창 띄우기
        if(username === '') return alert('이름을 입력하세요')
        
        //login 함수 실행 -> 전역 상태에 로그인 정보 저장
        login(username)
    }

    return(
        <div>
            {/* user가 존재하면(=로그인이 된 상태면) */}
            {user ? (
                <>
                    <p>{user.name}님, 로그인 되었습니다.</p>
                    <Link to='/profile'>프로필로 이동</Link>
                </>
            ):(
                <>
                    {/* user가 없으면(null) (=로그인이 안된 상태면) */}
                    <form onSubmit={submitHandler}>
                        <h1>로그인</h1>
                        <input type="text" placeholder="이름입력" value={user} onChange={(e)=>setUsername(e.target.value)}/>
                        {/* type=submit시 클릭하면 form의 submitHandler실행 */}
                        <button type="submit">로그인</button>
                    </form>
                </>
            )}
        </div>
    )
}