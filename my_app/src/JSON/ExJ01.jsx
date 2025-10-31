import { useState, useEffect } from "react";

export default function ExJ01(){
// 1. 상태변수 유무 생각
// 2. useEffect를 어디 사용할 건지
// 3. UI 어떻게 출력할 건지 생각
// 4. 컴포넌트 분리 유무도 생각
// 5. JSON을 이용해 데이터를 가져오기 해야하는 상황도 고려
// userId 파라미터를 상태 저장하는 변수 필요
// 6. 상태변수를 사용하는 경우 useState(초기값)을 생각

    const[userId, setUserId] = useState(1);
    // user를 userId에 해당하는 부분만 출력되도록 물어보는
    // 상태변수 필요
    const[user, setUser] = useState(null);

    // useEffect를 이용해서 JSON 데이터 받기
    useEffect(()=>{
        //JSON의 URL부분의 파라미터 형식으로 userId를 가져온다.
        //사용방법 ~/user/&{userId}
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        //res의 원문 response(응답하다)는 이미 React에 존재한다.(약속으로 줄임말사용)
        .then((res)=>res.json()) //JSON파싱(해석)
        //data: res.json() 넘겨준 데이터를 말함
        .then((data)=>{
            setUser(data)
        })
        //JSON에서 가져오는 데이터가 실패하든 성공하든 상관없이 무조건 출력
        .finally(()=>{
            console.log('요청완료')
        })

    },[userId])



    // const JSONdata = () =>{
    //     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    //     .then((res)=>res.json()) 
    //     .then((data)=>{
    //         setUser(data)
    //     })
    //     .finally(()=>{
    //         console.log('요청완료')
    //     })
    // }

    //useEffect를 이용해서 JSON 데이터 받기
    // (위처럼 먼저 함수로 뺀후, useEffect로 함수를 실행해서 불어와도됨 )

    // useEffect(()=>{
    //     JSONdata()
    // },[userId])

    //userId를 증가시키는 함수
    //핸들러함수란: 본인혼자는 아무것도 할수없는 함수
    //누군가 이벤트로 핸들러함수를 사용해야 비로소 실행되는 함수
    const idCountHandler = () =>{
        setUserId(userId+1);
    }

    //화면 그리기
    return(
        <div>
            <h2>현재 선택된 사용자 ID : {userId}</h2>
            <button type="button" onClick={idCountHandler}>다음 사용자 보기</button>
            {user && //user값이 존재하면 <div>를 랜더로 그리기. null이면 X
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            }
        </div>
    )

}