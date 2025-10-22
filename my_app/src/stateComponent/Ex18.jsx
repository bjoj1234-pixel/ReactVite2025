import React,{useState} from "react";

//'내보내기'하는게 부모 컴포넌트이다.
export default function Exstate18(){

    const[value, setValue] = useState(0);
    
    const addValue = () =>{
      setValue(value + 1)
    }

    return(
        <>
          <Child18 val={value} addVal={addValue} />          
        </>
    )
}

//props는 부모에서 자식으로 데이터를 읽기전용으로 보내준다
//props 값, 변수, 함수 모두 props로 보내진다.
function Child18(props){  

  return(
    <>
      <p>값: {props.val}</p>
      <button onClick={props.addVal}>+1</button>          
    </>
  )
}