import { useState } from "react";

//영화제목, 리뷰 입력구간
export default function MovieItem(props){
    const[inputTit, setInputTit] = useState('');
    const[inputReview, setInputReview] = useState('');

    let movAdd = () => {
        //영화 제목, 리뷰 배열을 얕은복사
       const copyTit = [...props.tit] ;
       const copyRev = [...props.rev];
       //인덱스값
       const copyMovieIndex = [...props.movieIndex];

       // 입력받은 값(제목, 리뷰) 없으면 메시지창
       if(!inputTit){
            return alert('입력해주세요');
       }

       // 입력받은 값(제목, 리뷰) 추가
       copyTit.unshift(inputTit);
       copyRev.unshift(inputReview);
       copyMovieIndex.push(copyMovieIndex.length-1);

       // 영화 제목,리뷰 배열 재세팅
       props.setTit(copyTit);
       props.setRev(copyRev);
       props.setMovieIndex(copyMovieIndex);

       //input 입력창 초기화
       setInputTit('');
       setInputReview('');
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