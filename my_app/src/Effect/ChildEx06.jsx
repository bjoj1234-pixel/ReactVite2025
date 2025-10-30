import { useState, useEffect } from "react";

export default function ChildEx06(props){
    useEffect(()=>{
        console.log('컴포넌트가 마운트 되었습니다!');

        return () => {console.log('컴포넌트가 언마운트 되었습니다!');}
    },[props.view])
   
    return(
        <> 
           <p>안녕하세요! 저는 토글 가능한 컴포넌트입니다.</p>
        </>
    )
}