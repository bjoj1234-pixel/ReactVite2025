import React,{useState} from "react";

//React에서는 화면 상태도 데이터로 관리한다.
export default function Modalchange(){
    //현재 모달 닫힘
    const[isOpen, setIsOpen] = useState(false)

    return(
        <>
            <div>
                <button onClick={() => setIsOpen(true)}>모달열기</button>
                {/* 값이 true면 보여줘라 */}
                {isOpen && <div>모달 내용</div>} 
                {isOpen && <button onClick={()=>setIsOpen(false)}>닫기</button>}
            </div>
        </>
    )
}