import { useState,useEffect } from "react";


export default function Eff08(){
    //사용자 목록 담을 변수
    const[user, setUser] = useState([]);
    //reload : 버튼 클릭으로 새로고침(재요청) 제어할 상태 변수
    const[reload, setReload] = useState(false);
    //isLoad : 데이터를 불러오는 중인지 여부를 확인할 상태 변수
    const[isLoad, setIsLoad] = useState(false);

    useEffect(() =>{
        setIsLoad(true);
        setTimeout(()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res=>res.json())
            .then(data=>{
                setUser(data);
                //로딩 완료 상태로 변경
                setIsLoad(false);
            })        
        },3000);       

    },[reload])//reload값이 바뀔때마다(변경될떄마다) useEffect 재실행

    return(
        <div>
            <button onClick={()=>{
                setReload(!reload);
                setIsLoad(true);
            }}>다시 불러오기</button>

            {isLoad ? <p>로딩중....</p> :
                <ul>
                    {user.map((user)=>(
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            }
        </div>
    )
}