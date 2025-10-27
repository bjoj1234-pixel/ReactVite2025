import { useState } from "react";
import FoodList from "../food/FoodList"
import CartModal from "../food/CartModal"

export default function FoodApp(){
    //초기음식 데이터
    const[foods] = useState([
        {id:1, name:'🍗치킨', price: 12000},
        {id:2, name:'🍕피자', price: 24000},
        {id:3, name:'🍔햄버거', price: 9000}
    ])

    //장바구니 데이터
    const[cart, setCart] = useState([]);

    //장바구니 모달
    const[isCartOpen, setIsCartOpen] = useState(false);

    //장바구니 추가 함수
    const addCart = (product) => {
        //장바구니 데이터 얕은 복사
        let copyCart = [...cart];
        //이미 담긴 음식인지 체크
        let cartCheck = false;

        //있으면 수량만 추가
        for(let i=0; i<copyCart.length; i++){
            if(copyCart[i].id === product.id){
                copyCart[i].quantity += 1;
                cartCheck = true;
                break;
            }
        }
        //없으면 새로 추가
        if(!cartCheck){
            copyCart.push({id: product.id, name: product.name, price: product.price, quantity:1});
        }
        //장바구니 데이터 세팅
        setCart(copyCart);   
    }

    //수량 업데이트 함수
    const Update = (product, num) =>{
        //장바구니 데이터 얕은 복사
        let copyCart = [...cart];

        for(let i=0; i<copyCart.length; i++){
            if(copyCart[i].id === product.id){
                if(copyCart[i].quantity + num <= 10 && copyCart[i].quantity + num >= 1){
                    copyCart[i].quantity = copyCart[i].quantity + num;
                }
            }
        }
        setCart(copyCart); 
    }

    //삭제 함수
    const delCart = (product) =>{
        //장바구니 데이터 얕은 복사
        let copyCart = [...cart];

        const indexCart = copyCart.findIndex((item)=>item.id === product.id);

        copyCart.splice(indexCart,1);

        setCart(copyCart); 
    }


    return(
        <>
            <div style={{backgroundColor:'#ffe4e4',padding:'45px',borderRadius:'20px'}}>
                <h2>🍜음식 주문</h2>
                <button type="button" onClick={()=>setIsCartOpen(true)} style={{backgroundColor: '#ff8383',color:'#fff',fontSize: '17px',fontWeight: '700',lineHeight: '21px',border: '3px solid #ffffff',boxShadow: '0 0 5px #ff8181'}}>장바구니</button>
                <FoodList cart={cart} addCart={addCart} foods={foods} />
            </div>
            {isCartOpen === true ? <CartModal cart={cart} setIsCartOpen={setIsCartOpen} Update={Update} delCart={delCart} /> : null}
        </>
    )
}