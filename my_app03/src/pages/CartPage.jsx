import { useDispatch,useSelector } from "react-redux";
import {deleteItem,plus,minus} from "../store02/cartSlice";
import './CartPage.css';
import { useEffect, useState } from "react";


export default function CartPage(){
    const dispatch = useDispatch();
    const items = useSelector((state)=>state.cart.items);
    const[total, setTotal] = useState(0);

    useEffect(()=>{
        let totalNum = 0;
        for(let i=0; i<items.length; i++){
            totalNum += items[i].price * items[i].quantity;
        }
        setTotal(totalNum);
    },[items])

    return(
        <section>
            <h2>장바구니 목록</h2>
            {items.length === 0 ? (<p>장바구니가 비어있습니다.</p>):
            (<ul>
                {items.map((item,index)=>(
                    <li key={index}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                        <p>{item.price * item.quantity}</p>
                        <p>
                            <button type="button" onClick={()=>dispatch(minus(item.id))}>-</button>
                            {item.quantity}개
                            <button type="button" onClick={()=>dispatch(plus(item.id))}>+</button>
                        </p>
                        <button type="button" onClick={()=>dispatch(deleteItem(item.id))}>삭제</button>
                    </li>
                ))}
            </ul>)}
            <p>총계: 금액 {total}</p>
        </section>
    )
}