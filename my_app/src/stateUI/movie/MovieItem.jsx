import { useState } from "react";

//영화제목, 리뷰 입력구간
export default function MovieItem(props){
    const[inputTit, setInputTit] = useState('');
    const[inputReview, setInputReview] = useState('');

    let movAdd = () => {

        //영화 배열을 얕은복사
        let copyMov = [...props.inputMov];

       // 입력받은 값(제목, 리뷰) 없으면 메시지창
       if(!inputTit){
            return alert('입력해주세요');
       }
       
       // 입력받은 값(제목, 리뷰) 추가
       copyMov.unshift({title:inputTit, review:inputReview});

       //unshift때문에 재배열후 id에 인덱스값 저장
       copyMov = copyMov.map((item,index)=>(
            {...item, id: index}
        ));      
       
       // 영화 배열 재세팅
       props.setinputMov(copyMov);
       
       //input 입력창 초기화
       setInputTit('');
       setInputReview('');

       console.log(copyMov);
    }


    return(
        <>
            <div>
                {/* 영화 제목입력 input */}
                <input type="text" onChange={(e)=>setInputTit(e.target.value)} value={inputTit} placeholder="영화 제목"/>
                
                {/* 영화 리뷰입력 input */}
                <input type="text" onChange={(e)=>setInputReview(e.target.value)} value={inputReview} placeholder="리뷰"/>
                
                {/* 추가버튼 */}
                <button onClick={movAdd}>추가</button>
            </div>
        </>
    )
}