import { useState, useEffect } from "react";
import "./Recipe.css";
import { Link } from "react-router-dom";

export default function RecipeList({data}){
    const[allProduct, setAllProduct] = useState(true);
    const[category, setCategory] = useState([]);

    const[rating, setRating] = useState(false);

    
    const sortProduct = (cate) => {
        setRating(false); 
        setAllProduct(false);
        const copyData = [...data];
        const cateFilter = copyData.filter((item)=>item.cuisine === cate);
        setCategory(cateFilter);        
    }

    const ratingSort = () => {
        setRating(true);     
    }

    const addLike = (item) =>{
        item.like !== null && item.like !== undefined ?  item.like++ : {...item, like:1};
    }

    return(
        <div>
            <h3>레시피 목록</h3>
            <button onClick={()=>{setAllProduct(true);setRating(false);}}>All</button>
            <button onClick={()=>sortProduct('Italian')}>Italian</button>
            <button onClick={()=>sortProduct('Asian')}>Asian</button>
            <button onClick={()=>sortProduct('American')}>American</button>
            <button onClick={()=>sortProduct('Mexican')}>Mexican</button>
            <button onClick={()=>sortProduct('Mediterranean')}>Mediterranean</button>
            <button onClick={()=>sortProduct('Pakistani')}>Pakistani</button>
            <button onClick={()=>sortProduct('Japanese')}>Japanese</button>
            <button onClick={()=>sortProduct('Moroccan')}>Moroccan</button>
            <button onClick={()=>sortProduct('Korean')}>Korean</button>
            <button onClick={()=>sortProduct('Greek')}>Greek</button>
            <button onClick={()=>sortProduct('Pakistani')}>Pakistani</button>
            <button onClick={()=>sortProduct('Thai')}>Thai</button>
            <button onClick={()=>sortProduct('Indian')}>Indian</button>
            <button onClick={()=>sortProduct('Turkish')}>Turkish</button>
            <button onClick={()=>sortProduct('Smoothie')}>Smoothie</button>
            <button onClick={()=>sortProduct('Russian')}>Russian</button>
            <button onClick={()=>sortProduct('Lebanese')}>Lebanese</button>
            <button onClick={()=>sortProduct('Brazilian')}>Brazilian</button>
            <button onClick={ratingSort}>Rating순</button>
            <ul>
                {(allProduct ? (rating ? [...data].sort((a,b)=>b.rating - a.rating) : [...data]) : (rating ? [...category].sort((a,b)=>b.rating - a.rating) : [...category])).map((item)=>(
                  <li key={item.id}>
                    <Link to={`/detail/${item.id}`}>
                        <img src={item.image} alt="#"/> 
                        <p>{item.name}</p>
                        <p>요리유형: {item.cuisine}</p>
                        <p>평점: {item.rating}</p>
                    </Link>
                    <button type="button" onClick={()=>{addLike(item)}}>♥ 좋아요{item.like !== null && item.like !== undefined ? item.like : 0}</button>
                  </li>  
                ))}
            </ul>

        </div>
    )
}