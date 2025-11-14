import { useDispatch,useSelector } from "react-redux";
import { addRemove } from "./cartSlice";

export default function Cart(){
     const sampleProducts = [
        { id: 1, name: '사과', price: 1000 },
        { id: 2, name: '바나나', price: 1500 },
        { id: 3, name: '오렌지', price: 1200 },
    ];

    const cartadd = useSelector((state)=>state.cartName.value);
    const dispatch = useDispatch();

    return(
        <div>
            <h2>장바구니</h2>
            <h3>상품목록</h3>
            <ul>
                {sampleProducts.map((item,index)=>(
                    <li key={index}>
                        {item.name} - {item.price}원
                        <button type="button" onClick={()=>{dispatch(addRemove(item[index]));console.log(cartadd);}}>장바구니 추가</button>
                    </li>
                ))}
            </ul>
            <h3>장바구니</h3>
            <ul>

            </ul>
        </div>

    )
}