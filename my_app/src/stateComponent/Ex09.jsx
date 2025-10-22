import React,{useState} from "react";

export default function Exstate09(){

    const[num, setNum] = useState(0);

    const numPlus = () => {
        setNum(num + 1)
    }

    return(
        <>
            <p>{num}</p>
            
            <button type="button" onClick={numPlus}>+</button>
            
            <p style={{height:'24px'}}>
                {num % 2 === 0 ? '짝수입니다' : ''}
            </p>
        </>
    )
}