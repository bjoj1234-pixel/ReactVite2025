import { useState,useEffect,createContext } from "react";

// 1. 생성자 함수
export const AuthContext = createContext();

// 2. Provider 함수
export default function AuthProvider({children}){
    const[user, setUser] = useState(null);

    const login = (username) =>{
        setUser(username)
    }

    const logout = () =>{
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}