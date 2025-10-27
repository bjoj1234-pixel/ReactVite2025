import { useState } from 'react'
import reactLogo from './assets/react.svg'
//src -> assets -> 이미지 파일은 반드시 import한다. (assets는 비공개형)
import viteLogo from '/vite.svg'
// import는 외부파일을 가져온다.
import './App.css'
// 리액트는 이미지를 하나하나 import해서 개별로 가져올 수 있다.
// public(공개형) 폴더의 이미지 파일은 import 하지 않아도 사용가능하다.
import image01 from '../public/images/image01.png'
// import Ex01 from './components/Ex01'
// import Ex02 from './components/Ex02'
// import Ex03 from './components/Ex03'
// import Ex04 from './components/Ex04'
// import Ex05 from './components/Ex05'
// import Ex06 from './components/Ex06'
// import Ex07 from './components/Ex07'
//import Ex08 from './components/Ex08'
//import Ex09 from './components/Ex09'
// import Ex10 from './components/Ex10'
//import Ex11 from './components/Ex11'
// import Ex12 from './components/Ex12'
// import Ex13 from './components/Ex13'
// import Parent from './propsComponents/parent'
// import Parent02 from './propsComponents/welcome'
//import Parent03 from './propsComponents/profile'
// import Parent04 from './propsComponents/prEx'
//import Welcome from './propsComponents/Props01'
// import UserCard02 from './propsComponents/Props02'
//import Product from './propsComponents/Props03'
//import Counter01 from './propsComponents/stateCount'
//import Counter02 from './propsComponents/stateCount02'
//import Props06 from './propsComponents/Props06'
//import Exstate01 from './stateComponent/Ex01'
// import Exstate02 from './stateComponent/Ex02'
//import Exstate03 from './stateComponent/Ex03'
// import Exstate04 from './stateComponent/Ex04'
//import Exstate05 from './stateComponent/Ex05'
//import Exstate06 from './stateComponent/Ex06'
//import Exstate07 from './stateComponent/Ex07'
//import Exstate08 from './stateComponent/Ex08'
//import Exstate09 from './stateComponent/Ex09'
// import Exstate10 from './stateComponent/Ex10'
// import Exstate11 from './stateComponent/Ex11'
//import Test from './stateComponent/test'
// import Exstate13 from './stateComponent/Ex13'
// import Exstate14 from './stateComponent/Ex14'
// import Exstate15 from './stateComponent/Ex15'
// import Exstate16 from './stateComponent/Ex16'
// import Exstate17 from './stateComponent/Ex17'
// import Exstate18 from './stateComponent/Ex18'
//import Exstate18 from './stateComponent/Ex18-02'
// import Blog from './stateComponent/Blog'
// import BlogC from './stateComponent/Blog/blogc'
// import MovieReview from './stateComponent/MovieReview'
// import './MovieReview.css'
// import ShoppingList from './stateComponent/ShoppingList'
// import './ShoppingList.css'
// import CommentBoard from './stateComponent/CommentBoard'
// import './CommentBoard.css'
// import Modalchange from './stateUI/uitest01'
// import LoginView from './stateUI/uitest02'
// import PromptChange from './stateUI/uitest03'
// import Parent from './stateUI/uitest04'
//import AuthApp from './stateUI/member/AuthApp'
import MovieApp from './stateUI/movie/MovieApp'
import NewMovie from './stateUI/NewMovie/MovieApp'
import ShopApp from './stateUI/shop/ShopApp'
import FoodApp from './stateUI/food/FoodApp'


//userCard() 함수 생성 하기 기본구조
//userCard() 컴포넌트를 App()컴포넌트의 자식으로 사용할 예정
//App() 컴포넌트의 name, age 매개 변수를 => props명령어를 이용
//컴포넌트와 컴포넌트 사이의 데이터 이동이 가능하다.
//부모->자식만 매개변수 보낼 수 있다.
function UserCard(props){
  //props(name,age)로 매개변수를 한꺼번에 써도되고,
  //{name,age}와 같이 매개변수를 따로 써도된다.
  return(
    <>
      <div style={{border:'1px solid #ddd',
        padding:'15px',
        margin:'10px',
        borderRadius:'8px'
      }}>        
        <h2>{props.name}</h2>
        <h2>{props.age}</h2>
      </div>
    </>
  )
}

//function App(){} => react에서 App()는 컴포넌트라 부른다.
function App() {
  //리액트는 반드시 return() 안에서 실행할 HTML 문서를 작성한다.

  const name = '홍길동';
  let isLoggin = true;
  let fruits = ['사과','오렌지','바나나'];

  let user = {name: '김철수', age:25, email: 'kim@naver.com'};

  const btnClick = ()=>{
    console.log('버튼이 클릭되었습니다');
  }

  const products = [
    { id: 1, name: "노트북", price: 1200000 },
    { id: 2, name: "마우스", price: 30000 },
    { id: 3, name: "키보드", price: 80000 }
  ];
  

  return (
    //<></>는 프래그먼트로 리액트는 HTML 작성시
    //반드시 부모태그가 하나만 존재해야 하므로 비어있는 태그를 사용하도록 허용한 기술이다.
    //리액트는 반드시 닫는 태그 존재해야 함 : <hr />
    <>
      {/* 문제: name : '홍길동'정의 후 <h1>태그에 출력하기 */}
      {/* <div style={{backgroundColor:'lightblue',padding:'20px',borderRadius:'10px'}}> */}
        {/* javascript의 class를 React는 className으로 사용 */}
        {/* react에서 변수의 값을 사용하려면 반드시 중괄호 안에 {변수이름} 입력 */}
        {/* <h1>{name}</h1>
        <h1>{isLoggin === true ? '환영' : '로그인 하세요' }</h1>
        <img src={reactLogo} alt="샘플 랜덤 이미지" /> */}


        {/* {fruits.map((item,index,array)=>( ))} */}
        {/* <ul>
            {fruits.map((item,index)=>(
              <li key={index}>{item}</li>
            ))}
        </ul> */}
        
        {/* name=>key, '김철수'=>value */}
        {/* <p>          
          <p>{user.name}</p>
          <p>{user.age}</p>
          <p>{user.email}</p>
        </p> */}

        {/* <p>스타일 적용된 박스</p>

        <button onClick={btnClick}>클릭</button>
      </div> */}

      {/* Usercard안의 name과 age는 일명 매개변수이다. */}
      {/* <UserCard name='홍길동' age={20} />
      <UserCard name='개나리' age={15} />
      <UserCard name='진달래' age={30} /> */}
      {/* <ul>
        {products.map((item,index)=>(//index대신 item.id를 써도됨
          <li key={index} style={{listStyle:'none',border:'1px solid #000',width:'170px',height:'150px',paddingTop:'15px',margin:'10px 0'}}>
            <p style={{fontWeight:'700',fontSize:'24px'}} >
              {item.name}
            </p>
            <p>
              가격: {item.price.toLocaleString('ko-kr')}원
            </p>          
          </li>
        ))}
      </ul> */}


      {/* <Ex01 /> */}
      {/* <Ex02 /> */}
      {/* <Ex03 /> */}
      {/* <Ex04 /> */}
      {/* <Ex05 /> */}
      {/* <Ex06 /> */}
      {/* <Ex07 /> */}
      {/* <Ex08 /> */}
      {/* <Ex09 /> */}
      {/* <Ex10 /> */}
      {/* <Ex11 /> */}
      {/* <Ex12 /> */}
      {/* <Ex13 /> */}
      {/* <Parent /> */}
      {/* <Parent02 /> */}
      {/* <Parent03 /> */}
      {/* <Parent04 /> */}
      {/* <Welcome name="개나리" /> */}
      {/* <UserCard02 name="개나리" age={18} city="서울" />
      <UserCard02 name="김백합" age={40} city="경기" />
      <UserCard02 name="최영숙" age={25} city="인천" /> */}
      {/* <Product name="노트북" price={120000} />
      <Product name="마우스" price={150000} /> */}
      {/* <Counter01 /> */}
      {/* <Counter02 /> */}
      {/* <Props06 type="error" msg="오류"/>
      <Props06 type="success" msg="성공"/>
      <Props06 type="asd" msg="경고"/>
      <Props06 type="qwe" msg="알림"/> */}
      {/* <Exstate01 /> */}
      {/* <Exstate02 /> */}
      {/* <Exstate03 /> */}
      {/* <Exstate04 /> */}
      {/* <Exstate05 /> */}
      {/* <Exstate06 /> */}
      {/* <Exstate07 /> */}
      {/* <Exstate08 /> */}
      {/* <Exstate09 /> */}
      {/* <Exstate10 /> */}
      {/* <Exstate11 /> */}
      {/* <Test /> */}
      {/* <Exstate13 /> */}
      {/* <Exstate14 /> */}
      {/* <Exstate15 /> */}
      {/* <Exstate16 /> */}
      {/* <Exstate17 /> */}
      {/* <Exstate18 /> */}
      {/* <Blog /> */}
      {/* <BlogC /> */}
      {/* <MovieReview /> */}
      {/* <ShoppingList /> */}
      {/* <CommentBoard /> */}
      {/* <Modalchange /> */}
      {/* <LoginView /> */}
      {/* <PromptChange /> */}
      {/* <Parent /> */}
      {/* <AuthApp /> */}
      {/* <MovieApp /> */}
      {/* <NewMovie /> */}
      {/* <ShopApp /> */}
      <FoodApp />
    </>
  )
  
}

//export는 App컴포넌트를 밖으로 내보낸다.
export default App