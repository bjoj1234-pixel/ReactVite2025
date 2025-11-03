import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RecipeDetail({data}){
    
    const {id} = useParams();

    const product = data.find((item)=>item.id === Number(id));

    return(
        <>
            {product !== null && product !== undefined ? (
                <div className="detail">
                    <h2>레시피 상세</h2>
                    <p>{product.name}</p>
                    <img src={product.image} alt="" />
                    <p>요리유형: {product.cuisine}</p>
                    <p>난이도: {product.difficulty}</p>
                    <p>서빙 수: {product.servings}</p>
                    <p>칼로리: {product.caloriesPerServing}</p>
                    <p>평점: {product.rating}</p>
                    <p>조리방법</p>
                    <ol className="product">
                        {product.instructions.map((item)=>(
                            <li key={item.id}>{item}</li>
                        ))}
                    </ol>
                    <p>
                        <Link to='/'>목록으로 돌아가기</Link>
                    </p>
                </div>
            ) : null}
        </>
    )
}