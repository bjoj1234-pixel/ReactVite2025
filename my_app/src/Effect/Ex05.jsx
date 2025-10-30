import { useState, useEffect } from "react";

export default function Ex05(){
    const[title, setTitle] = useState('');

    const inputTitle = (e) => {
        setTitle(e.target.value);
    }

    useEffect(()=>{
        //입력값이 있으면 그값을, 없으면 기본 제목을 설정
        if(title.trim() !== ''){
            document.title = title;
        }else{
            document.title = '제목입력';
        }      
    },[title]);
  
    return(
        <> 
            <h2>Dynamic Title Generator</h2>
            <input type="text" onChange={inputTitle} placeholder="브라우저 탭 제목을 입력하세요." />
            <p>입력한 내용이 실시간으로 브라우저 탭 제목에 반영됩니다.</p>            
        </>
    )
}