import { useState, useEffect } from "react";
import ChildEx06 from "../Effect/ChildEx06"

export default function Ex06(){
    const[view, setView] = useState(false);

    const viewClick = () =>{
        setView(!view);
    }

    return(
        <> 
            <h1>Lifecycle Demo</h1>
            <button onClick={viewClick}>{view? '컴포넌트 숨기기' : '컴포넌트 보기'}</button>
            
            {view && <ChildEx06 view={view}/>} 
            
            <p>F12를 눌러 콘솔을 확인하세요</p>
            <p>컴포넌트의 마운트/언마운트 메시지가 출력됩니다.</p>
        </>
    )
}