import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function FakestoreDetail({data}){

    const {category,id} = useParams();
    //useParams() 받아온 id가 props 받은 data같은 id가 존재하는지 찾아야한다.
    //
    const product = data.find((item)=>item.id === Number(id))



    //data == null 데이터를 못불러옴
    //data != null 데이터를 불러옴
    
    //React에서의 코드 표현 방식    
    // (이걸 쓰면 아래{data !== null &&  data !== undefined ? ():null이 필요없다고함 )
    //data 값을 못불러왔을때 예외처리 하는것임
    if(!product) return <p>데이터 불러오는중....</p>

    return(
        <>
            {product !== null &&  product !== undefined ? (
                <div>
                    <h3>상품 상세 보기</h3>
                    <p className="title">{product.title}</p>
                    <img src={product.image} alt="#" className="detail_img" />
                    <p>{product.category}</p>
                    <p>{product.price}</p>
                    <p>{product.rating.rate}</p>
                    <p>{product.description}</p>
                    <Link to='/'>상품목록으로 이동</Link>
                </div>
            ) : null}
        </>
    )
}