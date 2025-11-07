import { useState,useContext } from "react";
import { WishlistContext } from "./WishlistContext";
import { Link } from "react-router-dom";

export default function ProductList(){
    const {pro, addToWishlist, removeFromWishlist, wishNum} = useContext(WishlistContext);


    return(
        <div className="wish-wrap">
            <h1>💖찜하기 예제 <Link to='/wishlist'>찜 목록 보기</Link></h1>
            <h3>🎁상품 목록</h3>
            <ul>
                {pro.map((item)=>(
                    <li key={item.id}>
                        {item.name} - {item.price}원
                        {item.wish === 1 ? <button type="button" onClick={()=>removeFromWishlist(item.id)}>💖찜 해제</button>
                        : <button type="button" onClick={()=>addToWishlist(item.id)}>🤍찜 하기</button>}                          
                    </li>
                ))}
            </ul>
            <p> 현재 찜한 상품수 : {wishNum}</p>
        </div>
    )
}