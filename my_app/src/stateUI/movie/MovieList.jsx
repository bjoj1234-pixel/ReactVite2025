import { use, useState } from "react"
import MovieModal from "../movie/MovieModal"

// 하단 영화 목록li
export default function MovieList(props){

    let detailView = (index) => {        

        if(index >= 0){
            props.setModalOpen(true);
        }else{
            alert('X');
        }
    }

    return(
        <>
            <ul>
                {/* title 배열 불러와서 li 리스트 생성 */}
                {props.tit.map((item,index)=>(
                    <li key={index}>
                        <span>{item}</span>
                        <button onClick={()=>detailView(index)}>상세보기</button>
                        {props.modalOpen && <MovieModal tit={props.tit} rev={props.rev} movieIndex={index} setModalOpen={props.setModalOpen} />}
                    </li>
                    
                ))}
                
            </ul>
        </>
    )
}