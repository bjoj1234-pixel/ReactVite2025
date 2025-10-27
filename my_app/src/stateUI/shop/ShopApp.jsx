import { useState } from "react";

import ProductList from "../shop/ProductList"
import CartModal from "../shop/CartModal"

export default function ShopApp(){
    //원본 상품목록 배열
    //setproducts를 만들지 않은 이유 : 불변 유지 법칙을 위해(원본변경없이 읽기만 가능하도록 작성하기 위해)
    const [products] = useState([
        { id: 1, name: '노트북', price: 1200000 },
        { id: 2, name: '마우스', price: 25000 },
        { id: 3, name: '키보드', price: 50000 },
    ]);
    //장바구니 수량 추가하여 담기 = > 기존 상품 수량 비교
    //상품이 존재하면 수량만 증가 기능을 구현할수 있다.

    //장바구니 목록 배열
    const [cart, setCart] = useState([]);
    //모달 표시 여부(false=>close)
    const [showCart, setShowCart] = useState(false);

    //1. 기존의 장바구니에 담긴 상품이 존재하는지 비교하여 존재하면 수량만 1씩 증가,
    //존재하지 않으면 products 모구 장바구니에 추가
    //기존의 상품이 존재하는지의 여부를 판단하려면 상품 매개변수로 필요
    //아래 addCart()함수는 자바스크립트 방식으로 구현
    
    //React 방식으로 작성한 함수
    const addCart = (product) =>{
        //cart 얕은 복사 =>
        let cartCopy = [...cart]
        let findCheck = false; //같은 상품이 존재하는지 여부 체크

        //첫번째 방법
        //배열이름.findIndex((요소,인덱스,원본배열)=>return조건)
        //=>찾고 싶은 항목이 존재하면 그 항목이 존재하는 배열의 인덱스 번호를 반환
        //=>찾고 싶은 항목이 존재하지 않으면 -1 반환
        //const index = cart.findIndex((item)=>item.id === product.id)
        //=> 존재하면 index =1,2,3~~~ , 존재안하면 index = -1(없다)
        //고로 장바구니에 상품이 존재한다 => index !== -1
        // if(index !== -1){
        //     //수량증가코드
        //     cartCopy[index].quantity += 1;
        // }

        //두번째 방법
        for(let i=0;i<cartCopy.length;i++){
        //상품비교는 product의 id비교 : 고유한 값이기때문
            if(product.id === cartCopy[i].id){
                //상품 같은게 존재 -> 수량만 증가
                cartCopy[i].quantity += 1;
                findCheck = true;
                break;
            }
        }
        if(!findCheck){
            cartCopy.push({id: product.id, name: product.name, price: product.price, quantity:1})
        }

        setCart(cartCopy);
        console.log('장바구니 담겼니?'+cartCopy)

        //장바구니에 기존의 상품과 같은 상품이 없을때는 cart배열에 상품추가
    }



    return(
        <>
            <h2>쇼핑몰 🛒</h2>
            <button type="button" onClick={()=>setShowCart(true)}>장바구니 보기</button>
            {/* 자식 컴포넌트 */}
            {/* ProductList는 상품목록 UI출력 */}
            <ProductList products={products} addCart={addCart}/>
            {/* 모달이 showCart = true이면 CartModal 보이기, 아니면 null 조건 필요  */}
            {/* CartModal는 장바구니 담긴 목록 UI출력 */}
            {showCart === true ? <CartModal cart={cart} onClose={()=>setShowCart(false)} /> : null}

        </>
    )
}