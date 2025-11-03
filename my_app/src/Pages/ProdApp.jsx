import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

export default function ProdApp(){
    const prodItem = [
        {id:1, name: '노트북',price:1200000},
        {id:2, name: '키보드',price:5000},
        {id:3, name: '마우스',price:35000},
    ]

    return(
        <div>
            <h2>상품 목록</h2>
            <ul>
                {prodItem.map((item)=>(
                    <li key={item.id}>
                        {/* Link to = {`/detail/${item.id}`} 부분 중
                        ${item.id} => useParams() 받아올 파라미터값 */}
                        <Link to={`/detail/${item.id}`}>
                            <span>{item.name}-{item.price}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}