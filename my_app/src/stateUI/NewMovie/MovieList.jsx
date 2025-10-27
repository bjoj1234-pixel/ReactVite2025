import MovieItem from "./MovieItem"
//MovieApp의 자식
export default function MovieList(props){
    return(
        <>
            <ul>
                {/* <li>를 반복하기 위해 map()함수 이용 */}
                {props.movie.map((movie)=>(
                    // 자식인 MovieItem을 태그로 가져온다
                    // <li>태그는 MovieItem.jsx에 그릴 예정
                    <MovieItem key={movie.id} movie={movie} onSelect={props.onSelect}/>
                ))}
            </ul>
        </>
    )
}