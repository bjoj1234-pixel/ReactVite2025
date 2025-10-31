import { useState, useEffect } from "react";
import ProductList from './ProductList'
import './ProductApp.css'

export default function ProductApp(){
    //JSON 데이터
    const[data, setData] = useState([]);
    //이미지 데이터
    //const[img, setImg] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then((res)=>res.json())
        .then((data)=>{
            const dataSlice = data.map((product)=>(
                {id:product.id, name:product.title.slice(0,10), price:(100000*Math.random()+1).toFixed(0), img: `https://picsum.photos/150?random=${product.id}`}
            ))
            setData(dataSlice)

        })
        .catch((err)=>console.log(`오류 : ${err.message}`))
        .finally(()=>{console.log('요청완료')});
    },[])


    return(
        <>
           <ProductList data={data} />
        </>
    )
}