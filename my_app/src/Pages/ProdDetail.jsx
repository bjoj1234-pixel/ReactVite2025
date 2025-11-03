import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';

export default function ProdDetail(){
   //useParams()
   //URL의 http://localhost:5173/detail/1
   //=>1을 받아오는 함수이다.
   //형식 const{받아올 파라미터 값} = useParams()
    const {id} = useParams()

    return(
       <div>
            <h1>상품의 상세 페이지</h1>
            <p>상품의 ID는 <strong>{id}</strong>입니다.</p>
            <Link to='/'>상품목록으로 이동</Link>
       </div>
    )
}