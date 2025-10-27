export default function MovieModal(props){
    // 모달 => 투명 회색 오버레이 위에 모달출력 되도록 작성
    return(
        <>
            <div style={{position:'fixed',left:0,top:0,width:'100%',height:'100%',background:'rgba(0,0,0,0.2)',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div style={{backgroundColor: '#fff', padding:'20px',borderRadius:'5px',width:'300px'}}>
                    {/* 영화제목 */}
                    <h4>{props.selectMovie.title}</h4>
                    {/* 영화 리뷰 부분 */}
                    {/* 영화 리뷰가 공백이면 '아직 작성된 리뷰가 없습니다' */}
                    <p>{props.selectMovie.review === '' ? '아직 작성된 리뷰가 없습니다.': props.selectMovie.review}</p>
                    <button type="button" onClick={props.onClose}>닫기</button>
                </div>
            </div>

        </>
    )
}