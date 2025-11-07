import { createContext, useState } from "react";
import { useEffect } from "react";


export const WishlistContext = createContext();

export default function WishlistProvider({children}){    
    //데이터목록
    const products = [
        { id: 1, name: '노트북', price: 1500000 },
        { id: 2, name: '마우스', price: 30000 },
        { id: 3, name: '키보드', price: 80000 }
    ]

    //데이터복제
    const[pro, setPro] = useState([...products]);

    //찜하기 수 계산
    const[wishNum, setWishNum] = useState(0);

    const[wishlist, setWishlist] =useState([]);

    // 1. LocalStorage에서 최초 랜더링시 1회만 불러오기
    // useEffect이용해서 작성
    useEffect(()=>{
        const saved = localStorage.getItem('wishlist');
        if(saved){
            setWishlist(JSON.parse(saved)) //상태갱신
        }
    },[])

    //2. wishlist가 바뀔때마다 LocalStorage에 저장
    useEffect(()=>{
        localStorage.setItem('wishlist',JSON.stringify(wishlist));
    },[wishlist])



    //찜하기 추가
    const addToWishlist = (id) =>{
        const copyProducts = [...pro];        
        copyProducts[id-1].wish = 1;               
        setPro(copyProducts);
        setWishNum(wishNum+1);   
        wishlistSave();     
    }

    //찜하기 해제
    const removeFromWishlist = (id) =>{
        const copyProducts = [...pro];        
        copyProducts[id-1].wish--;               
        setPro(copyProducts);  
        setWishNum(wishNum-1);
        wishlistSave();
    }

    const wishlistSave = () =>{
        const copyPro = [...pro];  
        const imsi = [];
        for(let i=0; i<pro.length; i++){
            if(copyPro[i].wish == 1){
                imsi.push(copyPro[i]);
            }
        }

        setWishlist(imsi);
    }
    

    return(
        <WishlistContext.Provider value={{pro, addToWishlist, removeFromWishlist, wishNum, wishlist, wishlistSave}}>
            {children}
        </WishlistContext.Provider>
    )    
}