// 하단 영화 목록li
export default function MovieList(props){

    return(
        <>
            <ul>
                {/* title 배열 불러와서 li 리스트 생성 */}
                {props.inputMov.map((item)=>(
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <button onClick={()=>{
                            //모달상태 true로 변경
                            props.setModal(true);
                            //클릭한 인덱스 저장
                            props.setInd(item.id);
                        }}>상세보기</button>   
                    </li>
                ))}
                
            </ul>
        </>
    )
}