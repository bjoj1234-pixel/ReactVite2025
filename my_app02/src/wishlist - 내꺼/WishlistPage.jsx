import { useState,useContext } from "react";
import { WishlistContext } from "./WishlistContext";
import { Link } from "react-router-dom";

export default function WishlistPage(){
    const {removeFromWishlist, wishlist} = useContext(WishlistContext);
    
    return(
        <div className="wish-wrap">
            <h1>💖찜하기 예제 <Link to='/'>상품 보기</Link></h1>
            <h3>✅ 찜한 상품 목록</h3>
            <ul>
                {wishlist.map((item)=>(
                    <li key={item.id}>
                        {item.name} - {item.price}원
                        <button type="button" onClick={()=>removeFromWishlist(item.id)}>❌삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
