//1단계 slice파일 만들기
//리덕스의 상태+로직을 정의하는 부분이다.
//이 단계에서는 state 구조, state를 변경하는 reducer함수
//그리고 action생성 함수를 정의
//생성하는 라이브러리는 createSlice()이며 import한다.
import {createSlice}from '@reduxjs/toolkit'
const countSlice = createSlice({
    //name, initialState, reducers는 모두 예약어
    //고로 작명금지
    name:'counter', //state이름으로 state에서 접근할때 key로
    initialState : {value:0},//초기값 0 => 혹은 {object:{id:1, name:'키위'}}, boolean(true,false) , 'A' 등 모든 초기값 줄수있음.
    reducers: { //filter, find등 모든 동작을 넣을수 있다.
        increment:(state)=>{state.value+=1},
        decrement:(state)=>{state.value-=1},
        reset:(state)=>{state.value=0},
        //5씩 더하는 함수를 생성 => action의 payload를 이용해 상태를 변경
        incrementByAmount:(state,action)=>{
            state.value += action.payload;
        },
    }
}) 
//countSlice.actions는 = > action.type => {type: 'counter/increment'} ...자동생성해준다.
export const {increment,decrement,reset,incrementByAmount} = countSlice.actions;
console.log(countSlice.actions);
//countSlice.reducer는 Switch(action.type)
// {case 'counter/increment' : return state.value + 1} 함수를 의미한다.
export default countSlice.reducer;