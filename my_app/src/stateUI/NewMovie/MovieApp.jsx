import { useState } from "react";

// 자식 컴포넌트 : MovieList.jsx, MovieModal.jsx
import MovieList from '../NewMovie/MovieList';
import MovieModal from '../NewMovie/MovieModal';

export default function NewMovie(){
    //영화 제목, 리뷰 담는 변수
    const[movie, setMovie] = useState([]);
    //선택한 영화가 없으면 null반환 함수
    const[selectMovie, setSelectMovie] = useState(null);
    //영화 제목 담는 변수
    const[title, setTitle] = useState('');
    //영화 리뷰 담는 변수
    const[review, setReview] = useState('');

    //배열에 이미 0번위치에 빈 오브젝트가 생성된 관계로
    //렌더가 되면서 무조건 빈 그림이 그려진다.
    //예외처리도 이미랜더가 되고 난 후라 의미가 없다.
    //React 에서는 useState([{}]) 사용하지 말자


    //영화제목, 리뷰가 같이 저장되는 오브젝트 배열에
    //입력한 데이터가 삽입되는 함수 생성한다.

    const addMovie = () =>{
        // title이 반값이면 return으로 종료
        if(title === '') return;

        // movie를 얕은 복사
        let movieCopy = [...movie];
        // 오브젝트는 반드시 id가 들어가야함.
        // id:movie.length로 하게되면, => 삭제시 length 이슈가 발생함
        // 삭제 이슈없이 작성하길 원하면 id: Date.now()
        movieCopy.push({id:movie.length, title:title, review:review});
        // 반드시 업데이트 setMovie()를 통해야 재 랜더링이 된다.
        setMovie(movieCopy);
        // title, review의 input에 입력이 되고 난후 입력된 글자
        // 비워주기
        setTitle('');
        setReview('');
    }
    
    return(
        <>
            <div>
                <h2>영화 리뷰 관리 앱</h2>
                <input type="text" placeholder="영화제목" value={title} onChange={(e)=>setTitle(e.target.value)} />
                <input type="text" placeholder="영화리뷰" value={review} onChange={(e)=>setReview(e.target.value)}/>
                <button type="button" onClick={addMovie}>추가</button>
                {/* 자식 컴포넌트 태그로 가져오기 */}
                {/* 영화 목록 출력을 위해 movie, selectMovie 
                    props로 데이터 전달함
                */}
                <MovieList movie={movie} onSelect={setSelectMovie} />
                {/* 모달이 열림/닫힘
                    selectMoive !=null 아니면 모달출력,
                    아니면 null, React에서 null은 빈값이 아닌 아무것도 렌더되지 않는 상태
                */}
                {selectMovie != null ? <MovieModal selectMovie={selectMovie} onClose={()=>setSelectMovie(null)} />: null}
            </div>
        </>
    )
}