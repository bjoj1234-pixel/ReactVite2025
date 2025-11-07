import { createContext, useState,useEffect } from "react";


export const WishlistContext = createContext();

export default function WishlistProvider({children}){    
    //local저장 : 1번 방법
    //찜한 항목을 저장할 상태변수
    const[wishlist, setWishlist] = useState(()=>{
        const saved = localStorage.getItem('wishlist');
        //저장된 찜이 있으면 복원, 없으면 빈 배열
        return saved ? JSON.parse(saved) :[]
    });
    useEffect(()=>{
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    },[wishlist]);

    //local저장 : 2번 방법

    //const[wishlist, setWishlist] = useState([]);
    // 1. LocalStorage에서 최초 랜더링시 1회만 불러오기
    // useEffect이용해서 작성
    // useEffect(()=>{
    //     const saved = localStorage.getItem('wishlist');
    //     if(saved){
    //         setWishlist(JSON.parse(saved)) //상태갱신
    //     }
    //     //useEffect에서는 return방식은 cleanUp함수 작성방법이기때문에 잘못작성하면 삭제됨,
    //     //그래서 if문 사용함.
    // },[])

    //2. wishlist가 바뀔때마다 LocalStorage에 저장
    // useEffect(()=>{
    //     localStorage.setItem('wishlist',JSON.stringify(wishlist));
    // },[wishlist])
    
    //찜한 상품을 추가하는 함수 생성
    //이미 같은 id를 가진 상품이 존재하면 중복 추가 X
    //=> 기존 존재 유무를 확인해야함
    const addToWishlist = (product) =>{
        // .find()로 존재유무 확인후, 존재하면 오브젝트 배열로 반환. 없으면 undefined
        const listFind = wishlist.find((item) => item.id === product.id);
        
        //listFind에 같은 id가 존재하면, 찜에 추가 X
        if(listFind === undefined){
            //찜 추가
            let listCopy = [...wishlist];
            listCopy.push(product);
            setWishlist(listCopy);
        }
    }

    const removeFromWishlist = (id) =>{
        // .filter()함수 이용해 id가 다른 항목만 남겨서 업데이트
        setWishlist(wishlist.filter((item)=>item.id !== id))
    }
    
    // 찜하기 목록 전체삭제
    const clearWishlist = () =>{
        setWishlist([]);
        localStorage.removeItem('wishlist');
        
    }

    //isInWishList : 이미 찜된 항목 확인을 위해 생성하는 함수
    //해당id의 상품객체가 존재하면 true, 없으면 false
    //find()함수이용
    const isInWishList = (id) => {
        // wishlist 배열에서 id가 일치하는 상품을 찾는다.
        const findItem = wishlist.find((item) => item.id === id);
        //찾는 상품이 존재하면 findItem은 객체(Object)가 들어가고, 없으면 undefined
        if(findItem !== undefined){//id 존재함
            //상품이 이미 찜 목록에 있음 -> true반환
            return true;
        }else{
            //상품이 있음 -> false 반환
            return false;
        }
    }


    return(
        <WishlistContext.Provider value={{wishlist,addToWishlist,removeFromWishlist,isInWishList,clearWishlist}}>
            {children}
        </WishlistContext.Provider>
    )    
}