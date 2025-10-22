import React,{useState} from "react";

export default function Exstate10(){
    
    const[num, setNum] = useState(0);

    // if로 구현
    // const numMinus = () =>{
    //     if(num === 0){
    //         alert("0 이상만 가능합니다.")
    //     }else{
    //         setNum(num-1);
    //     }
    // }
    // const numPlus = () =>{
    //     if(num === 10){
    //         alert("0 이하만 가능합니다.")
    //     }else{
    //         setNum(num+1);
    //     }
    // }

    return(
        <>
            {/* 삼항연산자로 구현 */}
            <button type="button" onClick={()=>{num === 0 ? alert("0 이상만 가능합니다.") : setNum(num-1)}}>-</button>
            <span>{num}</span>
            <button type="button" onClick={()=>{num === 10 ? alert("10 이하만 가능합니다.") : setNum(num+1)}}>+</button>


            {/* if로 구현 */}
            {/* <button type="button" onClick={numMinus}>-</button>
            <span>{num}</span>
            <button type="button" onClick={numPlus}>+</button> */}
        </>
    )
}