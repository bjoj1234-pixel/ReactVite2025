import { useState, useEffect } from "react";

export default function Ex11(){
    const[name, setName] = useState('');
    const[age, setAge] = useState('');

    const changeName = (e) =>{
        setName(e.target.value);
    }
    const changeAge = (e) =>{
        setAge(e.target.value);
    }

    useEffect(()=>{
        if(!name.trim()) return //공백이면 콘솔안뜨게

        console.log('이름이 변경되었습니다');
    },[name])

    useEffect(()=>{
        if(!age.trim()) return //공백이면 콘솔안뜨게
        
        console.log('나이가 변경되었습니다');
    },[age])
    
    return(
        <>  
            이름: 
            <input type="text" value={name} onChange={changeName} placeholder="이름입력" />
            <br />나이: 
            <input type="text" value={age} onChange={changeAge} placeholder="나이입력" />           
        </>
    )
}
