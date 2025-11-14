//2단계 : store.js 만들기
//Redux의 중앙 저장소 역할을 하는 부분이다.
//Slice를 store에 등록해야 컴포넌트에서 사용할수있다.

import { configureStore } from "@reduxjs/toolkit";
//counterSlice 안에있는걸 다 가지고옴. countReducer라는 이름은 작명
import countReducer from './ReduxToolkit/counterSlice';

export const store = configureStore({
    reducer:{
        //앞에붙는 'counter'는 counterSlice.js파일의 name : 'counter'와 반드시 같아야 한다.
        counter:countReducer,

    }
})