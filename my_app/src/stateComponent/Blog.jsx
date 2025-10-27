import React,{useState} from "react";

export default function Blog(){

  const[posts, setPosts] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  const[likes, setLikes] = useState([0,0,0]);
  const[inputValue, setInputValue] = useState('');

  //모달 창이 안보이는 상태를 false로 지정
  const[modalOpen, setModalOpen] = useState(false);
  //선택된 글의 인덱스 지정
  const[selectedIndex, setSelectedIndex] = useState(null);


  const today = new Date();
  const month = today.getMonth();
  const date = today.getDate();

  //-------------------------------------------------
  //실행 로직 함수
  //글 추가 함수
  const addPost = () =>{
    //글을 입력하면 위로 추가 : 배열이름.unshift 이용
    //배열 또는 오브젝트 또는 오브젝트 배열은 React에서 useState 훅 사용시
    //힙의 메모리 주소를 구분을 못함.(자바스크립트에서는 구분함.)
    //고로 얕은 복사가 필요하다.
    //얕은 복사 형식 : [...배열이름]

    //예외처리 : 혹시 모를 데이터의 필요없는 오류(공백 등)로부터 데이터가 정확하게 입력되도록 로직으로 예외처리
    //input 입력받은 값이 공백일 때는 추가 금지하는 코드 필요
    if(inputValue.trim() === ''){
      //값을 반환후 종료(추가X)하기 위해 return사용
      return alert('자료를 입력하세요')
    }

    let postCopy = [...posts];
    //위로추가
    postCopy.unshift(inputValue);
    //setPosts 함수형 변수에 변경된 입력값을 담아 둔다.
    setPosts(postCopy);

    //===============================
    //좋아요 추가 코드
    //setLikes([...likes, 0])
    let likesCopy = [...likes];    
    likesCopy.unshift(0);
    setLikes(likesCopy);

    //input 입력한 글이 발행버튼 클릭과 동시에 지워지는 코드
    setInputValue('');
  }
  //글 삭제 함수
  //삭제할 글의 index번호를 모르면 삭제 안됨
  const delPost = (index) =>{
    //배열삭제 프로퍼티 : splice(시작위치, 삭제할 길이)
    let postCopy = [...posts]
    let likesCopy = [...likes]

    postCopy.splice(index,1)
    setPosts(postCopy)

    likesCopy.splice(index,1)
    setLikes(likesCopy)
  }
  //좋아요 증가 함수
  //증가해야 하는 index번호 모르면 증가가 안됨
  const addLikes = (index) =>{
    let likesCopy = [...likes]
    //좋아요 증가 코드
    likesCopy[index] += 1
    setLikes(likesCopy)
  }
  //-------------------------------------------------
  // react에서 로직함수 생성 후 return의 태그에 지정하는 방식의 차이로 인해 렌더링이 안될 수 있다.
  // 1. onClick = {addPost} : 클릭할때 마다 실행(정상)
  // 2. onClick = {() => addPost()} : 클릭할 때마다 실행(정상)
  // 3. onClick = {addPost()} : 렌더링시 바로실행하고 끝남, 일명 '즉시 실행' 함수

    return(
        <>
          <ul>
            {posts.map((item,index)=>(
              <li key={index} style={{listStyle:'none'}}>
                {/* 태그안에 함수 동시에 두개 불러오기 */}
                <h4 onClick={()=>{setModalOpen(true); setSelectedIndex(index);}}>{item}👍<span onClick={()=>(addLikes(index))} style={{display:'inline-block',cursor:'pointer',width:'15px'}}> {likes[index]}</span></h4>
                <p>{month+1}월 {date}일 발생</p>
                <button onClick={()=>(delPost(index))}>삭제</button>
              </li>
            ))}            
          </ul>
          <input type="text" placeholder="글 제목 입력" onChange={(e)=>(setInputValue(e.target.value))} value={inputValue}/>
          <button type="button" onClick={addPost}>글발행</button>
          
          {/* 자식 modal데이터 보내기 */}
          {/* 글제목, 글 인덱스, 모달닫기함수, 칼라 */}
          {modalOpen && <Modal color={'lightgray'}
          title={posts} setPosts={setPosts}
          onClose={()=>setModalOpen(false)}
          index={selectedIndex}
          month={month} date={date}/>}
        </>
    )
}

//자식 컴포넌트 modal
function Modal(props){
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