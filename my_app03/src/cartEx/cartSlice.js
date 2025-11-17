import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    //name은 store에 저장될 keye되는 이름임. 아주중요
    name:'cartName',
    //initialState:초기값 주는 것, item=[] 빈배열 생성
    initialState : {items:[]},
    //reducers는 로직
    reducers:{
        // addItem: (state,action)=>{
        //     //아래코드는 장바구니에 계속 같은상품인 사과만 삽입된다.
        //     state.items.push({id:1,name:'사과',price:1000});
        // },
        addItem: (state,action)=>{
            console.log(action.payload);
            state.items.push(action.payload);
        },
        removeItem: (state,action)=>{
            
            state.items.splice(action.payload,1);


            //같은 상품이 존재하면 삭제, 아니면 삭제 불가
            //배열이름.findIndex(()=>조건) => 존재하는 값의 인덱스번호 출력
            //값이 존재하지 않으면 -1이 출력됨
            // const delIndex = state.items.findIndex((item)=>item.id === action.payload);
            // if(delIndex !== -1){ //찾는값이 존재하면 => 삭제
            //     state.items.splice(delIndex,1);
            // }
            //state.items = state.items.filter((item)=>item.id !== action.payload)            
        },
        reset:(state)=>{
            state.items=[]
        }
    }
})

//위에서 작성한 로직, 이름은 모두 export로 내보낸다
export const {addItem,removeItem,reset} = cartSlice.actions;
//switch case문을 이용한 함수로 자동생성하는 부분
export default cartSlice.reducer;