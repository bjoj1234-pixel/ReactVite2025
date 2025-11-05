import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export default function AuthProvider({children}){
    const[user, setUser] = useState(null);

    const login = (id, pw) =>{
        setUser({userId: id, userPw: pw});
    }
    const logout = () =>{
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{user, setUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}