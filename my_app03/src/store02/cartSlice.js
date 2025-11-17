import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{items:[]},
    //동기적으로 상태를 변경하는 함수들 모임
    //동기적=>버튼 클릭, 또는 입력 Change
    //총계 구하는 함수-> 작성 금지
    reducers:{
        insertItem : (state,action)=>{
            const newItem = action.payload;
            const existIndex = state.items.find((item)=>item.id == newItem.id)

            if(existIndex == undefined){
                //장바구니에 같은 상품이 존재하지 않는다는 의미
                //push하면서 수량까지 추가
                //...newItem => 스프레드 문법(spread Operator)
                //const newItem = {
                // id:1, name:'사과',price:1000
                //}=> 펼쳐놓은 곳에 quantity:1을 삽입시킨다.
                state.items.push({...newItem,quantity:1});                
            }else{
                //같은 상품 존재할때는
                existIndex.quantity += 1;
            }
        },
        deleteItem : (state,action)=>{
            
            const index = state.items.findIndex((item)=>item.id === action.payload)
            //없으면 : -1, 있으면 -1이 아님.
            if(index !== -1) {
                state.items.splice(index,1);
            }            
        },
        plus:(state,action) =>{
            // const index = state.items.findIndex((item)=>item.id === action.payload);
            // state.items[index].quantity++;

            const id = action.payload;  
            //.find()는 값이 없으면 undefined 출력됨, 값이 있으면 배열로 출력 itemId = [{quantity:1}]
            const itemId = state.items.find((item)=>item.id===id)

            if(itemId !== undefined){
                itemId.quantity += 1;
            }
        },
        minus:(state,action) =>{
            // const index = state.items.findIndex((item)=>item.id === action.payload);
            // state.items[index].quantity--;
            const id = action.payload;  
            //.find()는 값이 없으면 undefined 출력됨, 값이 있으면 배열로 출력 itemId = [{quantity:1}]
            const itemId = state.items.find((item)=>item.id===id)

            if(itemId !== undefined && itemId.quantity > 1){
                itemId.quantity -= 1;
            }
        },
    }
})

export const {insertItem,deleteItem,plus,minus} = cartSlice.actions;
export default cartSlice.reducer;