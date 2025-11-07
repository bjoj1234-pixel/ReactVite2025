import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from 'react-router-dom';
import MealsData from './api/MealsData'

export const AuthContext = createContext();

export default function AuthProvider({children}){
    const navigate = useNavigate();

    const data = MealsData();
    const[user, setUser] = useState(null);

    const login = (id, pw) =>{
        if(id==='1' && pw==='1'){
            navigate('/');
            setUser({userId: id, userPw: pw});            
        }else{
            alert('id, 비밀번호를 확인하세요');
        }
    }
    const logout = () =>{
        navigate('/login');
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

    const wishHandler = (product) =>{
        const copyWishList = {...wishList};
        
        copyWishList[product.id] = !copyWishList[product.id];

        setWishList(copyWishList);

        const pageAdd =  copyWishList.filter((item)=>item === true);
        setWishArray(pageAdd);
        console.log(wishArray);
    }

    


    return(
        <AuthContext.Provider value={{user, setUser, login, logout, wishList, wishHandler}}>
            {children}
        </AuthContext.Provider>
    )
}