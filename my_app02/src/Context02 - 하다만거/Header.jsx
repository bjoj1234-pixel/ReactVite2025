import { useContext } from 'react';
import { UserContext } from './AuthContext'
import { Link } from "react-router-dom";

export default function Header(){

    const {userStatus,userName,login,logout} = useContext(UserContext);

    return(
        <header>
            <h1>
                Context 인증실습
            </h1>
        
            {userStatus !== true ?
                <div className="links">
                    <button type='button'>홈</button>
                    <Link to='/login' >로그인</Link>
                </div>
            :
                <div className="links">
                    <button type='button'>홈</button>
                    <button type='button'>프로필</button>
                    <button type='button' onClick={logout}>로그아웃</button>
                </div>
            }
        </header>
    )
}