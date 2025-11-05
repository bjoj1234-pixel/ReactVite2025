import { useState } from "react";
import { createContext } from "react"; //데이터 공용 저장 장소 생성하는 라이브러리

//1번 : 데이터 저장소 생성 Context
//내가만든 저장소는 내보내기 해야되기때문에 export해야 받을수있다.

export const ThemeContext = createContext();

//2번 : Provider 컴포넌트 정의(데이터에 값을 매김)
export default function ThemeProvider({children}){
    //전역변수 지정
    // toggle 버튼(false=>true, true=>false)
    // toggle 버튼을 숨김/보임 상태를 저장하는 변수
    const[theme,setTheme]= useState(false);
    //토글 함수(업데이트 하는 함수)
    const toggleTheme = () => {
        //setTheme(!theme);

        //prev는 이전의 값이라는 의미의 약어(위 문장하고 같은 거임)
        //이렇게 쓰면 좀더 명확히 의도를 알수있음
        setTheme((prev)=> !prev);

    }

    //공유할 데이터는 : 값, 함수 모두 가능
    return(
        //내가만든 저장소 이름.Provider
        //ThemeContext.Provider의 value={{}} 값을 공유한다.
        //여기서 공유할 데이터 : theme, toggleTheme
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children} 
        </ThemeContext.Provider>
        // 감싸고있는 모든 자식 (children)이 전달받음. children은 내가 정한 이름임.
    )

}