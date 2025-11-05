import { useState } from "react";
import { createContext } from "react";
//1) Context 생성
// - createContext( )는 React의 전역 저장소(공유 공간)를 만드는 함수이다.
// - 컴포넌트 트리 전체에 데이터를 전달 할 수 있게 해준다.
// 반드시 export해야 함수를 내보낼수 있다.

export const AuthContext = createContext();


//2) provider 정의한다
// - AuthContext 컴포넌트는 Context의 '공급자(Provide)'역할
// - App 전체를 감싸서, user, logi,logout 데이터를 전역으로 전달
// - value={{data1, data2}}에 값을 실음

//Provider를 할 수 있는 함수를 생성한다.
export default function AuthProvider({children}){
    //상태변수 user: 사용자 정보 저장
    //기본값 null => 빈값 input입력은  alert()로 예외처리 혹은 방어코드 작성


    //로그인 사용자 정보 저장
    const[user, setUser] = useState(null);


    const login = (username) =>{
        setUser({name: username});
    }

    const logout = () =>{
        setUser(null);
    }
    //Provider는 value 속성을 통해 하위 컴포넌트에 데이터를 공유
    //{children}은 <AuthContext></AuthContext> 사이에 포함된 하위 컴포넌트를 의미
    return(
        <AuthContext.Provider value={{user,setUser,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}