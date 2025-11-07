import { useContext,useState } from "react";
import { AuthContext } from "../Context/AuthContext";
//useNavigate import 한다.
import { useNavigate } from "react-router-dom";

export default function HomePage(){
    const {user,logout} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const logoutHandler = () =>{
        logout();
        navigate('/');
    }
    
    return(
        <div>
            <h2>Home Page</h2>
            {user ?
                <>
                    <h2>안녕하세요 {user}님</h2>
                    <button type="button" onClick={logoutHandler}>로그아웃</button>
                </>: <h2>로그인이 필요합니다.</h2>
            }
        </div>
    )

}