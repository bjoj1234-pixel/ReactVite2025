//Counter.jsx 파일은 컴포넌트 파일로 UI
//useSelector와 useDispatch인 훅을 이용하여 상태를 읽고, 액션을 보낸다.
//useDispatch는 단순히 값만 보낸다.
//counterReducer이 그 값을 처리해서 store에 저장한다.
//Counter.jsx가 useSelector로 그걸 읽는다.

import { useSelector,useDispatch } from "react-redux";

export default function Counter(){
    //useSelector이용해 state의 count를 읽어온다.
    const count = useSelector(state=>state.count);
    console.log('처음이야',count);
    //useDispatch이용해서 내보낸다.
    const dispatch = useDispatch();

    // +  => 10까지 => 10 alert창 띄우기
    // -  => 0까지 => 0 보다 작으면 alert창 띄우기
    const plusHandler = () =>{
        if(count>=10){
            alert('수량은 10개까지');
        }else{
            dispatch({type:'INCREMENT'});
        }
    }

    const minusHandler = () =>{
        if(count<=0){
            alert('수량은 0개까지');
        }else{
            dispatch({type:'DECREMENT'});
        }
    }

    return(
        <>
            <h2>Count {count}</h2>
            <button type="button" onClick={plusHandler}>+</button>
            <button type="button" onClick={minusHandler}>-</button>
        </>
    )
}