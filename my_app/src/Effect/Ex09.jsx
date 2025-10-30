import { useState, useEffect } from "react";

export default function Ex09(){
    const[msg, setMsg] = useState('');
    const[output, setOutput] = useState([]);


    const inputMsg = (e) =>{
        setMsg(e.target.value);
    }    
    const addMsg = () =>{
        if(msg.trim()===''){
            return alert('입력하세요')
        }else{
            const copyOutput = [...output];
            copyOutput.push(msg);
            setOutput(copyOutput);
            setMsg('');
        }
        
    }

    useEffect(()=>{
        if(output.length > 0){
            let lastOutput = output[output.length-1];
            console.log(lastOutput);
        }     
        
    },[output])


    return(
        <> 
            <h1>간단 메시지 입력기</h1>
            <input type="text" onChange={inputMsg} value={msg} placeholder="메시지를 입력하세요"/>
            <button onClick={addMsg}>전송</button>
            <ul>
                {output.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
           
        </>
    )
}
