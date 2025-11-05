import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext'
import { Link } from "react-router-dom";

export default function Header(){
    //user: 현재 로그인 사용자 정보, logout: 로그아웃 함수
    const {user,logout} = useContext(AuthContext);

    return(
        <header>
            <h1>
                Context 인증실습
            </h1>
                <Link to='/'>홈</Link>
                {/* user가 로그인 되있을때 (null이 아닐때) */}
                {user ? (
                    <div>
                        <Link to='/profile'>프로필</Link>
                        <button type='button' onClick={logout}>로그아웃</button>
                    </div>

                ):(
                    <Link to='/login' >로그인</Link>
                )} 
                {/* user가 로그인 안되있을때 (null일때) */}           
        </header>
    )
}