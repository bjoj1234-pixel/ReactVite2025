import { useState } from "react";
// CSS
import '../TableOrder/css/TableOrder.css'
// 메뉴 리스트
import MenuList from "../TableOrder/MenuList"
// 장바구니 모달
import CartList from "../TableOrder/CartList"
// 주문내역 모달
import OrderList from "../TableOrder/OrderList"

export default function TableOrder(){
    //베스트10 메뉴
    const[bestMenu, setBestMenu] = useState([]);
    //식사메뉴
    const foodMenu = [
        {id:1, name: '김치찌개', price: 8000, img: 'han01.jpg'},
        {id:2, name: '된장찌개', price: 7500, img: 'han02.jpg'},
        {id:3, name: '제육볶음', price: 9000, img: 'han03.jpg'},
        {id:4, name: '불고기', price: 10000, img: 'han04.jpg'},
        {id:5, name: '비빔밥', price: 8500, img: 'han05.jpg'},
        {id:6, name: '순두부찌개', price: 8000, img: 'han06.jpg'},
        {id:7, name: '갈비탕', price: 11000, img: 'han07.jpeg'},
        {id:8, name: '육개장', price: 9500, img: 'han08.jpg'},
        {id:9, name: '오징어볶음', price: 9000, img: 'han09.jpg'},
        {id:10, name: '닭갈비', price: 10500, img: 'han010.jpg'},
        {id:11, name: '삼겹살정식', price: 12000, img: 'han011.jpg'},
        {id:12, name: '청국장', price: 8000, img: 'han012.jpg'}
    ];
    //안주 메뉴
    const sideMenu = [
        {id:1, name: '어묵탕', price: 11000, img: 'an01.jpg'},
        {id:2, name: '두부김치', price: 12000, img: 'an02.jpg'},
        {id:3, name: '골뱅이무침', price: 16000, img: 'an03.jpg'},
        {id:4, name: '감자튀김', price: 9000, img: 'an04.jpg'},
        {id:5, name: '먹태', price: 10000, img: 'an05.jpg'},
        {id:6, name: '치즈계란말이', price: 11000, img: 'an06.jpg'},
        {id:7, name: '소세지야채볶음' , price: 12000, img: 'an07.jpg'},
        {id:8, name: '닭발볶음', price: 14000, img: 'an08.jpg'},
        {id:9, name: '해물파전', price: 15000, img: 'an09.jpg'},
        {id:10, name: '부추전', price: 13000, img: 'an010.jpg'},
        {id:11, name: '막창볶음', price: 18000, img: 'an011.jpg'},
        {id:12, name: '돼지껍데기구이', price: 13000, img: 'an012.jpg'}
    ];
    //술,음료 메뉴
    const drinkMenu = [
        {id:1, name: '소주', price: 5000, img: 'sul01.jpg'},
        {id:2, name: '맥주', price: 6000, img: 'sul02.jpg'},
        {id:3, name: '막걸리', price: 6000, img: 'sul03.jpg'},
        {id:4, name: '청하', price: 7000, img: 'sul04.jpg'},
        {id:5, name: '복분자주', price: 12000, img: 'sul05.jpg'},
        {id:6, name: '콜라', price: 6500, img: 'sul06.jpg'},
        {id:7, name: '하이볼', price: 8000, img: 'sul07.jpg'},
        {id:8, name: '망고칵테일', price: 9000, img: 'sul08.jpg'},
        {id:9, name: '레드와인', price: 10000, img: 'sul09.jpg'},
        {id:10, name: '백세주', price: 9000,  img: 'sul10.jpg'},
        {id:11, name: '매화수', price: 6000,  img: 'sul11.jpg'},
        {id:12, name: '사케', price: 15000, img: 'sul012.jpg'}
    ];
    //장바구니 목록
    const[cart, setCart] = useState([]);
    //장바구니 모달상태
    const[showCart, setShowCart] = useState(false);
    //장바구니 담긴갯수
    const[totalNum, setTotalNum] = useState(0);
    //장바구니 총 결제금액 
    const[totalPay, setTotalPay] = useState(0);
    //주문 목록 임시저장 
    const[copyOrder, setCopyOrder] = useState([]);
    //찐 주문 목록 
    const[orderList, setOrderList] = useState([]);
    //주문 목록 모달상태
    const[showOrder, setShowOrder] = useState(false);
    //주문 목록 총 결제금액 
    const[orderPay, setOrderPay] = useState(0);

    //좌측 고정메뉴에서 선택된 메뉴리스트
    const[selMenu, setSelMenu] = useState(foodMenu);

    //메뉴클릭시 장바구니 담기는 함수
    const addCart = (selMenu,item) =>{
        //장바구니에 담긴 메뉴배열 얕은복사
        const copyMenu = [...selMenu]; 
        //클릭된 item의 id와 얕은복사한 메뉴배열의 id가 같으면 index를 저장하라.
        const copyMenuIndex = copyMenu.findIndex((menu)=>menu.id === item.id);
        
        //기존 장바구니 목록을 얕은복사
        const copyCart = [...cart];

        //기존 장바구니에 담긴것중에 클릭한 것과 동일한 이름이 있으면
        //해당 장바구니 상품의 인덱스를 찾아서 저장
        const copyCartIndex = copyCart.findIndex((menu)=>menu.name === copyMenu[copyMenuIndex].name);

        //만약 인덱스가 -1(상품이 없으면)
        if(copyCartIndex === -1){
            //장바구니에 추가
            copyCart.push({...copyMenu[copyMenuIndex], quantity:1});
        }else{
            //있으면 수량만 1 올려줌
            copyCart[copyCartIndex].quantity++
        }
        
        setCart(copyCart);
        updatePay(copyCart);
        updateQuantity(copyCart);
        copyOrderList(copyCart);
    }

    //장바구니 +,- 버튼 클릭시 수량 업데이트
    const updateNum = (item, num) => {
        //기존 장바구니 목록을 얕은복사
        const copyCart = [...cart];
        //기존 장바구니에 담긴것중에 클릭한 것과 동일한 이름이 있으면
        //해당 장바구니 상품의 인덱스를 찾아서 저장
        const copyCartIndex = copyCart.findIndex((menu)=>menu.name === item.name);

        //수량이 1이상, 10이하 일때까지만 계산하라
        if(copyCart[copyCartIndex].quantity + num >= 1 && copyCart[copyCartIndex].quantity + num <= 10){
            copyCart[copyCartIndex].quantity = copyCart[copyCartIndex].quantity + num;
        }        
        setCart(copyCart);
        updatePay(copyCart);
        updateQuantity(copyCart);
        copyOrderList(copyCart);
    }

    //장바구니 총 결제금액 업데이트 함수
    const updatePay = (copyCart) =>{
        //총 결제금액
        let total = 0;
        //장바구니에 담긴 상품가격 모두 합산
        for(let i=0; i<copyCart.length; i++){
            total += copyCart[i].quantity * copyCart[i].price;
        }
        setTotalPay(total);
    }
    //장바구니 총 담긴 갯수 업데이트 함수
    const updateQuantity = (copyCart) =>{
        //총 결제금액
        let totalNum = 0;
        //장바구니에 담긴 상품가격 모두 합산
        for(let i=0; i<copyCart.length; i++){
            totalNum += copyCart[i].quantity;
        }
        setTotalNum(totalNum);
    }
    //일단 장바구니 내역을 주문내역에 임시로 추가해두는 함수
    const copyOrderList = (copyCart) =>{
        let copyOrder = [];
        for(let i=0;i<copyCart.length;i++){
            copyOrder.push({id:[i+1], name:copyCart[i].name, price:copyCart[i].price, img:copyCart[i].img, order: copyCart[i].quantity});
        }
        //임시 주문내역 저장
        setCopyOrder(copyOrder);
    }
    //임시 주문내역을 주문버튼 클릭시 찐 주문내역으로 넘김
    const addOrderList = () =>{
        //찐 주문내역에 저장
        setOrderList(copyOrder);

        //총 결제금액
        let total = 0;
        //베스트10 메뉴 얕은복사
        let copyBestMenu = [...bestMenu];
        let copyBestMenuIndex = 0;
        
        for(let i=0; i<copyOrder.length; i++){
            //임시 주문내역에 담긴 상품가격 모두 합산하여 최종 결제금액에 저장
            total += Number(copyOrder[i].order) * copyOrder[i].price;
            //베스트10 메뉴에 새로 주문내역과 겹치는게 있으면 인덱스 저장
            copyBestMenuIndex = copyBestMenu.findIndex((menu)=>menu.name === copyOrder[i].name);

            //만약 인덱스가 -1(상품이 없으면)
            if(copyBestMenuIndex === -1){
                //베스트10 리스트에 추가
                copyBestMenu.push({id:copyBestMenu.length+1, name:copyOrder[i].name, price:copyOrder[i].price, img:copyOrder[i].img, order: copyOrder[i].order});
            }else{
                //있으면 수량만 1 올려줌
                copyBestMenu[copyBestMenuIndex].order++
            }
        }

        //주문내역 정렬
        copyBestMenu.sort((a,b)=>{
            //주문수가 같으면
            if(b.order === a.order){
                //가나다순 정렬
                return a.name.localeCompare(b.name, 'ko');
            }else{
                //주문수가 다르면, 주문수가 높은것부터 내림차순 정렬
                return b.order - a.order; 
            }
        });

        //주문수 높은것 10개만 저장
        // let copyBestMenu2 = [];
        // for(let j=1; j<=10; j++){
        //     copyBestMenu2.push({id:copyBestMenu2.length+1, name:copyBestMenu[j].name, price:copyBestMenu[j].price, img:copyBestMenu[j].img, order: copyBestMenu[j].order});
        // }

        //주문 내역 최종 결제금액
        setOrderPay(total);
        //베스트10 메뉴 누적저장
        setBestMenu(copyBestMenu);
    }




    return(
        <>
            <div className="container">
                {/* 좌측 고정메뉴 */}
                <div className="left-menu">
                    <ul className="menu">
                        <li><a href="#none" onClick={()=>setSelMenu(bestMenu)}>베스트10</a></li>
                        <li><a href="#none" onClick={()=>setSelMenu(foodMenu)}>식사메뉴</a></li>
                        <li><a href="#none" onClick={()=>setSelMenu(sideMenu)}>안주메뉴</a></li>
                        <li><a href="#none" onClick={()=>setSelMenu(drinkMenu)}>술,음료</a></li>
                    </ul>
                    <button type="button" className="orderBtn" onClick={()=>setShowOrder(true)}>주문내역</button>
                    <div className="tableNum"></div>
                </div>
                {/* 우측 메뉴리스트 */}
                <div className="right-list">
                    <MenuList bestMenu={bestMenu} foodMenu={foodMenu} sideMenu={sideMenu} drinkMenu={drinkMenu} selMenu={selMenu} addCart={addCart}/>
                </div>
                {/* 우측 고정 장바구니 버튼 */}
                <button type="button" onClick={()=>setShowCart(!showCart)} className="cart-button">
                    장바구니 <span>{totalNum}</span>개
                </button>
                {/* 장바구니 모달 */}
                {showCart && <CartList cart={cart} setCart={setCart} updateNum={updateNum} totalPay={totalPay} setTotalPay={setTotalPay} setTotalNum={setTotalNum} showCart={showCart} setShowCart={setShowCart} addOrderList={addOrderList} />}
                {/* 주문내역 모달 */}
                {showOrder && <OrderList orderList={orderList} showOrder={showOrder} orderPay={orderPay} setShowOrder={setShowOrder}/>}
            </div>
        </>
    )
}
