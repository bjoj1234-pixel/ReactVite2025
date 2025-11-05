// createContext 데이터 저장소를 생성
// 단, 반드시 createContext를 import해야한다.
import { createContext } from "react";

//초기값은 null로 지정한다.
//반드시 export해서 내보내기 해야한다.

export const UserContext = createContext(null);
