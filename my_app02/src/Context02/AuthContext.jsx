import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export default function AuthProvider({children}){
    //로그인 상태 저장
    const[userStatus, setUserStatus] = useState(null);
    //로그인 사용자 이름 저장
    const[userName, setUserName] = useState(null);

    const login = (name) =>{
        setUserName(name);
        setUserStatus(true);
    }

    const logout = () =>{
        setUserName(null);
        setUserStatus(false);
    }
    
    return(
        <UserContext.Provider value={{userStatus,userName,login,logout}}>
            {children}
        </UserContext.Provider>
    )
}