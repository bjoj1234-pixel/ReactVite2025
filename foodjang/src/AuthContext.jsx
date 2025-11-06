import { useState } from "react";
import { createContext } from "react";
import MealsData from './api/MealsData'

export const AuthContext = createContext();

export default function AuthProvider({children}){

    const data = MealsData();
    const[user, setUser] = useState(null);

    const login = (id, pw) =>{
        setUser({userId: id, userPw: pw});
    }
    const logout = () =>{
        setUser(null);
    }

    const wish = {};
    
    if(data.length > 0){ 
        for(let i=0; i<data.length; i++){
            const copyData = data[i];
            wish[copyData.id] = false; 
        }
    }  
    //찜하기 상태변수
    const[wishList, setWishList] = useState(wish);
    //찜하기페이지 추가
    const[wishArray, setWishArray] = useState([]);

    const wishHandler = (id) =>{
        const copyWishList = {...wishList};
        
        copyWishList[id] = !copyWishList[id];

        setWishList(copyWishList);

        const pageAdd =  wishList.filter((item)=>item === true);
        setWishArray(pageAdd);
        console.log(wishArray);
    }

    


    return(
        <AuthContext.Provider value={{user, setUser, login, logout, wishList, wishHandler}}>
            {children}
        </AuthContext.Provider>
    )
}