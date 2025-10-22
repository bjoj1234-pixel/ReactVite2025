import React,{useState} from "react"

export default function Test(){
    const[item,setItem] = useState([])
    
    const addItem = () => {
        //console의 item 배열에 값이 추가되어도
        //React 입장에서는 item의 주소가 바뀌지 않았다고 판단하여 화면을 업데이트 하지않는다.
        //고로, 리렌더링 하지않아 화면에는 출력이 되지않는다.
        
        console.log(`아이템: ${item}`)

        setItem([...item, `아이템 ${item.length + 1}`])
    }
    
    return(
        <>
            {/* <button onClick={()=>{setItem([...item, `아이템 ${item.length + 1}` ])}}>추가</button> */}
            <button onClick={addItem}>추가</button>
            <ul>
                {item.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>            
        </>
    )
}