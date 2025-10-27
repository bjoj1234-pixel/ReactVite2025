//MovieList 부모의 자식
//MovieApp의 손자

export default function MovieItem(props){

    return(
        <>
            <li>
                {/* MovieItem이 부모로 부터 물려받은 데이터는 Movie이다. */}
                {props.movie.title}
                <button type="button" onClick={()=>props.onSelect(props.movie)}>상세보기</button>
            </li>        
        </>
    )
}