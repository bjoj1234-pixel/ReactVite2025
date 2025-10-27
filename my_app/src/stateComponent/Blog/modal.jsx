//자식 : 모달UI
//자식 컴포넌트 modal
export default function Modal(props){
  //update 함수필요
  //update 조건 => 얕은 복사필요
  //1. props.title를 얕은 복사한다.
  //   let titleCopy = [...props.title]
  //2. prompt("새 제목을 입력하세요", ~~~)
  //   titleCopy[props.index] = prompt("새 제목을 입력하세요", titleCopy[props.index])
  //3. titleCopy[props.index] => titleCopy[0] => 남자코트 추천
  //4. 수정 한 글제목을 update해야 함
  //   props.setPosts(titleCopy)

  const update = () => {
    let titleCopy = [...props.title]
    
    //if문 없이 하는방법: 값을 입력하면 값이 들어가고, 취소누르면 원래값이 들어가게
    //prompt의 특징: 취소를 누르면 기본값으로 null이 들어간다.
    titleCopy[props.index] = prompt("새 글 제목을 입력하세요", titleCopy[props.index]) || titleCopy[props.index]
    props.setPosts(titleCopy);
    // if(titleCopy[props.index]){
    //   props.setPosts(titleCopy);
    // }else{
    //   return
    // }
  }

  return(
    <>
      <div className="modal" style={{backgroundColor:props.color}}>
        <h4>{props.title[props.index]}</h4>
        <p>날짜 : {props.month+1}월 {props.date}일</p>
        <p>상세내용 : 여기에 내용을 넣어 보세요</p>
        <button onClick={update}>글수정</button>
        <button onClick={props.onClose}>닫기</button>
      </div> 
    </>
  )
}