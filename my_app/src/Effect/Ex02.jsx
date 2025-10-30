import { useState, useEffect } from "react";

export default function Ex02(){

    useEffect(()=>{
        document.title = 'Welcome to React!'
    },[])
    

    return(
        <>
            <div>
                <h3>Title Changer</h3>
                <p>브라우저 탭을 확인해보세요!</p>
                <p>제목이 'Welcome to React!'로 변경되었습니다</p>
            </div>
        </>
    )
}