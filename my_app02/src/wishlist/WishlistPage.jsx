import { useContext } from "react";
import { WishlistContext } from "./WishlistContext";

export default function WishlistPage(){
    const {removeFromWishlist, wishlist,clearWishlist} = useContext(WishlistContext);
    
    return(
        <div style={{padding:'20px'}}>
            <h1>💖찜하기 예제</h1>
            <h3>✅ 찜한 상품 목록</h3>
            <button type="button" onClick={clearWishlist}>전체 삭제</button>
            <ul>
                {wishlist.length === 0 ? 
                    <p>찜 한 상품이 없습니다.</p>
                    :(
                        <ul>
                            {wishlist.map((item)=>(
                                <li key={item.id} style={{marginBottom:'10px'}}>
                                    {item.name} - {(item.price).toLocaleString()}원
                                    <button type="button" onClick={()=>removeFromWishlist(item.id)}>❌삭제</button>
                                </li>
                            ))}
                        </ul>
                    )               
                }
            </ul>
        </div>
    )
}
