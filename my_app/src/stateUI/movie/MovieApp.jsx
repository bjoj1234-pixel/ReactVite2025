import { useState } from "react";

import MovieList from "../movie/MovieList"
import MovieItem from "../movie/MovieItem"
import MovieModal from "../movie/MovieModal"


export default function MovieApp(){
    //영화 제목,리뷰 입력 저장 배열
    const[inputMovie, setInputMovie] = useState([]);
    //모달상태
    const[modalOpen, setModalOpen] = useState(false);
    //클릭한 인덱스 저장
    const[index, setIndex] = useState(0);

    return(
        <>
            <h3>영화 리뷰 관리 앱 🎬</h3>
            <div>
                {/* 영화 제목, 리뷰입력 input */}
                <MovieItem inputMov={inputMovie} setinputMov={(copyMov)=>setInputMovie(copyMov)} setModal={(a)=>setModalOpen(a)} />

                {/* 입력한 영화리스트 li표시 */}
                <MovieList inputMov={inputMovie} modal={modalOpen} setModal={(a)=>setModalOpen(a)} setInd={(b)=>setIndex(b)} />
                
                {/* 모달창 */}
                {modalOpen && <MovieModal inputMov={inputMovie} modal={(a)=>setModalOpen(a)} ind={index} />}
            </div>
        </>
    )
}