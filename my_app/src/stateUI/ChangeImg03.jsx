import { useState } from "react";

export default function ChangeImg03(){
        const imgs = [
            '/images/coffee-gray.jpg',
            '/images/coffee-blue.jpg',
            '/images/coffee-pink.jpg',
        ];        
        const[index, setIndex] = useState(0);

        const changeImg = () =>{
            //첫번째 방법
            // if(index < imgs.length-1){
            //     setIndex(index+1)
            // }else{
            //     setIndex(0);
            // }

            //두번째 방법
            setIndex((index+1) % imgs.length)
        }

    return(
        <>
            <img src={imgs[index]} onClick={changeImg} />
    
        </>
    )
}