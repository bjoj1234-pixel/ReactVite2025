import { useState } from "react";
//내가만든 공유데이터 저장소 import
import { UserContext } from "./Context/UserContext";
import Header from "./Context/Component/Header";


export default function UserApp(){
    
    // useState 이름 저장(전역변수)
    //부모 컴포넌트에서 공유할 데이터를 상태변수로 지정
    const [username, setUsername] = useState('홍길동');

    console.log('UserContext.Provider에 전달될 값', {username, setUsername});
    
    return(
        //provider로 감싸서 전역의 데이터 값을 전달한다.
        <UserContext.Provider value={{username, setUsername}}>
            <div>
                <h2>Context API 기본예제</h2>
                <Header />
            </div>
        </UserContext.Provider>
    )

}