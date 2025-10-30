import { useState, useEffect } from "react";

export default function Ex01(){
    //모든 HOOK의 생명주기 존재
    //1.=>마운트(랜더 시작)
    //2.=>업데이트(setUpdate())
    //3.=> 업데이트 된 내용 리랜더 되고 난 후 언마운트(삭제 됨)
    //useState() => 랜더, 업데이트 필요
    //useEffect() => 랜더 이외의 작업, 네트워크에서 자료를 가져오는 일..
    //useEffect(() => {}) => 랜더될때 마다 실행 됨
    //useEffect(() => {},[]) => 처음 랜더될때 1회 실행
    //useEffect(() => {},[의존성 배열]) => 의존성 배열이 실행 될때마다 실행


    useEffect(()=>{
        console.log('컴포넌트가 마운트 되었습니다!');
    },[])

    return(
        <>
            <div>
                <h1>useEffect 기본 예제</h1>
                <p>F12를 눌러 콘솔을 확인해보세요!</p>
                <p>"컴포넌트가 마운트되었습니다!" 메시지가 출력됩니다.</p>
            </div>
        </>
    )
}