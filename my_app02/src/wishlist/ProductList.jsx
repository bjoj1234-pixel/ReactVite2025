import { useContext } from "react";
import { WishlistContext } from "./WishlistContext";

//임시 데이터
// function밖에 넣어서 전역변수로 사용
const products = [
    { id: 1, name: '노트북', price: 1500000 },
    { id: 2, name: '마우스', price: 30000 },
    { id: 3, name: '키보드', price: 80000 },
];

export default function ProductList(){
    const {wishlist,addToWishlist,removeFromWishlist,isInWishList} = useContext(WishlistContext);


    return(
        <div style={{padding:'20px'}}>
            <h1>💖찜하기 예제</h1>
            <h3>🎁상품 목록</h3>
            <ul>
                {products.map((item)=>(
                    <li key={item.id} style={{marginBottom:'10px'}}>
                        {item.name} - {(item.price).toLocaleString()}원
                        <button type="button"
                        onClick={()=>isInWishList(item.id) ? removeFromWishlist(item.id):addToWishlist(item)}>
                            {/* 버튼안의 문구 */}
                            {isInWishList(item.id) ? '💖찜 해제':'🤍찜 하기'}
                        </button> 
                    </li>
                ))}
            </ul>
            <p> 현재 찜한 상품수 : {wishlist.length}</p>
        </div>
    )
}