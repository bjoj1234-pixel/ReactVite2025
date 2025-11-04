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


    

    //오브젝트에 0을 초기화하는 초기값 변수
    const defaultLikes = {} // 빈 배열 또는 빈 오브젝트는 undefined 오류뜰 가능성 높음. 따라서 예외처리 반드시 필요.

    if(data.length > 0){ //예외처리 (data.length가 있을때만 for문 실행)
        for(let i=0; i<data.length; i++){
            const recipe = data[i];
            // defaultLikes[1] = 0
            // {id:1, 좋아요 0}
            defaultLikes[recipe.id] = 0; //각 레시피 id별로 초기값 0으로 세팅

        }

    }    

    console.log(defaultLikes);

    //좋아요 출력할 방향
    //         id  like  id  like  id  like
    // like = { 1 : 0 ,   2 : 0 ,   3 : 0...}
    const[likes,setLikes] = useState(defaultLikes);
    // JSON 자체가 오브젝트이기 때문에 const[likes,setLikes] = useState(0); 와 같이 초기화 불가능. 이유는 하나의 항목만 좋아요가 0이 되기때문에


    //좋아요 버튼 클릭시 좋아요 1씩 증가하는 핸들러 작성
    const handleLike = (id) =>{
        //배열 또는 오브젝트는 힙의 어드레스 번지 주소가 같으면 리랜더링을 하지않아서 반드시 얕은 복사필요
        const likesCopy = {...likes};
        // undefined인 경우 = > undefined + 1 => NaN이 나옴
        likesCopy[id] = (likesCopy[id] !== undefined ? likesCopy[id] : 0) + 1;

        setLikes(likesCopy);
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
                    <button type="button" onClick={()=>handleLike(item.id)}>♥ 좋아요{likes[item.id]}</button>
                  </li>  
                ))}
            </ul>

        </div>
    )
}