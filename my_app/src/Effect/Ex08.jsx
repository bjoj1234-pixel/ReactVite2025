import { useState, useEffect } from "react";

export default function Ex08(){
    const[input1, setInput1] = useState(0);
    const[input2, setInput2] = useState(0);
    const[multi, setMulti] = useState(0);

    const numChange1 = (e) =>{
        setInput1(e.target.value);
    }
    const numChange2 = (e) =>{
        setInput2(e.target.value);
    }

    useEffect(()=>{

        setMulti(input1 * input2);
        console.log(`${input1} X ${input2} = ${input1 * input2}`);

    },[input1,input2])




    return(
        <> 
            <h1>곱셈 계산기</h1>
            <p>첫번째 숫자 <input type="number" onChange={numChange1}/></p>
            <p>두번째 숫자 <input type="number" onChange={numChange2}/></p>
            <p>결과:</p>
            <p>{multi}</p>
            <p>콘솔을 열면 계산 과정도 확인할 수 있습니다.</p>    
        </>
    )
}
