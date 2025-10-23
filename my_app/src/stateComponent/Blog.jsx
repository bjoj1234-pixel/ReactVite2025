import React,{useState} from "react";

export default function Blog(){

  const[posts, setPosts] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  const[likes, setLikes] = useState([0,0,0]);
  const[inputValue, setInputValue] = useState('');

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
                <h4>{item}👍<span onClick={()=>(addLikes(index))} style={{display:'inline-block',cursor:'pointer',width:'15px'}}> {likes[index]}</span></h4>
                <p>{month+1}월 {date}일 발생</p>
                <button onClick={()=>(delPost(index))}>삭제</button>
              </li>
            ))}            
          </ul>
          <input type="text" placeholder="글 제목 입력" onChange={(e)=>(setInputValue(e.target.value))} value={inputValue}/>
          <button type="button" onClick={addPost}>글발행</button>
        </>
    )
}