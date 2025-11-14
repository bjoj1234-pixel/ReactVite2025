//4단계 컴포넌트 UI
//컴포넌트 useSelector로 상태를 읽고
//useDispatch로 액션 (increment,decrement,reset...)을 호출한다.
import { useDispatch,useSelector } from "react-redux";
import { increment,decrement,reset,incrementByAmount } from "./counterSlice";

export default function Counter(){
    //상태 읽기
    const count = useSelector((state)=>state.counter.value);
    //액션실행준비 = >내보내기
    const dispatch = useDispatch()

    return(
        <>
            <h1>카운터 : {count}</h1>
            <button type="button" onClick={()=>dispatch(increment())}>+</button>
            <button type="button" onClick={()=>dispatch(decrement())}>-</button>
            <button type="button" onClick={()=>dispatch(reset())}>Reset</button>
            <button type="button" onClick={()=>dispatch(incrementByAmount(5))}>+5</button>
        </>
    )
}