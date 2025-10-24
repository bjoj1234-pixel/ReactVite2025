import { useState } from "react";

import MovieList from "../movie/MovieList"
//import MovieItem from "../movie/MovieItem"
import MovieModal from "../movie/MovieModal"


export default function MovieApp(){
    //영화 제목 입력값
    const[title, setTitle] = useState([]);
    //영화 리뷰 입력값
    const[review, setReview] = useState([]);
    //인덱스값
    const[movieIndex, setMovieIndex] = useState([]);
    //모달상태
    const[modalOpen, setModalOpen] = useState(false);

    const[inputTit, setInputTit] = useState('');
    const[inputReview, setInputReview] = useState('');

    let movAdd = () => {
        //영화 제목, 리뷰 배열을 얕은복사
       const copyTit = [...title] ;
       const copyRev = [...review];
       //인덱스값
       const copyMovieIndex = [...movieIndex];

       // 입력받은 값(제목, 리뷰) 없으면 메시지창
       if(!inputTit){
            return alert('입력해주세요');
       }

       // 입력받은 값(제목, 리뷰) 추가
       copyTit.unshift(inputTit);
       copyRev.unshift(inputReview);
       copyMovieIndex.unshift(copyMovieIndex.length);

       // 영화 제목,리뷰 배열 재세팅
       setTitle(copyTit);
       setReview(copyRev);
       setMovieIndex(copyMovieIndex);

       //input 입력창 초기화
       setInputTit('');
       setInputReview('');
    }


    return(
        <>
            <h3>영화 리뷰 관리 앱 🎬</h3>
            <div>
                {/* 영화 제목입력 input */}
                <input type="text" onChange={(e)=>setInputTit(e.target.value)} value={inputTit} placeholder="영화 제목"/>
                
                {/* 영화 리뷰입력 input */}
                <input type="text" onChange={(e)=>setInputReview(e.target.value)} value={inputReview} placeholder="리뷰"/>
                
                {/* 추가버튼 */}
                <button onClick={movAdd}>추가</button>
            </div>
            <MovieList tit={title} rev={review} movieIndex={movieIndex} setMovieIndex={setMovieIndex} modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </>
    )
}