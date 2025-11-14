//counterReducer.js파일은
//상태(state)와 동작(action)을 정의하는 가장 핵심 로직이다.
//Redux의 동작원리
//리듀서->스토어->Provider->컴포넌트
const initialState = {count: 0}//initialState는 예약어이므로 고로작명X
export default function counterReducer(state=initialState, action){
 switch(action.type){
    case 'INCREMENT':
        return {count:state.count +1} //1씩 증가
    case 'DECREMENT':
        return {count:state.count -1} //카운트가 1씩감소
    default:
        return state
 }
}
