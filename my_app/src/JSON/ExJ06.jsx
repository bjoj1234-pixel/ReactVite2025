import { useState, useEffect } from "react";
import "./ExJ06.css";

export default function ExJ06(){
    //JSON 데이터
    const[data, setData] = useState([]);
    //가격순 정렬 데이터
    const[sort, setSort] = useState([]);
    //버튼전환
    const[btn, setBtn] = useState(true);


    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then((res)=>{
            if(!res.ok){ 
                throw new Error(`에러메시지 ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            setData(data);
            //console.log(`Json으로 ${data}`) =>[Object,Object]러 출력된다
            //배열 또는 객체는 문자열로 바꾸어 출력하는데
            //.toString() 자바스크립트 변환방식의 한계로 저렇게 출력이된다.
            //고로 여기서는 console.log(인수1, 인수2)
            const copyData = [...data];
            copyData.sort((a,b)=>b.price - a.price);
            setSort(copyData);
        })
        .catch((err)=>console.log(`오류 : ${err.message}`))
        .finally(()=>console.log('요청완료'));
    },[])


    const btnPrice = () => {
        setBtn(true);
        setSort(data);
        const copyData = [...data];
        copyData.sort((a,b)=>b.price - a.price);
        setSort(copyData);
    }
    const btnCategory = () => {
        setBtn(false);
    }

    const btnCate = (e) => {
        setSort(data);
        const copyData = [...data];
        const filter = copyData.filter((item)=>item.category.includes(e.target.textContent));
        setSort(filter);
    }


    return(
        <>
            <div>
                <button onClick={btnPrice}>가격순</button>
                <button onClick={btnCategory}>카테고리별</button>
                {btn ?
                    <ul>
                        {sort.map((item)=>(
                            <li key={item.id}>
                                <img src={item.image} alt="#" />
                                <p className="title">{item.title}</p>
                                <p>{item.price}</p>
                            </li>
                        ))}
                    </ul>  
                :
                    <div>
                        <button onClick={btnCate}>men's</button>
                        <button onClick={btnCate}>jewelery</button>
                        <button onClick={btnCate}>electronics</button>
                        {/* <button onClick={btnCate}>rate</button>
                        <button onClick={btnCate}>count</button> */}
                        <ul>
                            {sort.map((item)=>(
                                <li key={item.id}>
                                    <img src={item.image} alt="#" />
                                    <p className="title">{item.title}</p>
                                    <p>{item.price}</p>
                                </li>
                            ))}
                        </ul>
                    </div>         
                }
            </div>
        </>
    )
}