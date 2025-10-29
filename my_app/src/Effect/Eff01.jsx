import { useState,useEffect } from "react";

export default function Eff01(){
    
    //Effect의 의존성 빈배열 이용하여 한번만 실행
    useEffect(()=>{
        console.log('컴포넌트가 처음 나타났어요');
    },[])//빈배열

    return <h2>useEffect 기본 실행</h2>
}