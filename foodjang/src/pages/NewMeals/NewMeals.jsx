import { useState } from "react";
import { Link } from "react-router-dom";
import './NewMeals.css';

export default function NewMeals({data}){
    const[list, setList] = useState(null);
    const[inputVal, setInputVal] = useState('');
    const[view, setView] = useState(6);

    const listRating = () =>{
        const copyData = [...data];
        const copySort = copyData.sort((a,b)=> b.rating - a.rating);        
        setList(copySort);
    }

    const listReview = () =>{
        const copyData = [...data];
        const copySort = copyData.sort((a,b)=> b.reviewCount - a.reviewCount);        
        setList(copySort);
    }

    const listChange = (val) =>{
        setInputVal(val);

        const copyData = [...data];

        if(val !== 'all'){
            const filtering = copyData.filter((item)=>(item.mealType.includes(val) || item.tags.includes(val)));
            setList(filtering);
        }else{
            setList(copyData);
        }
                
    }

    const viewChange = (view) =>{
        setView(Number(view));

    }
    // const copyData = [...data];
    // const filtering = copyData.filter((item)=>(item.mealType.includes(val)||item.tags.includes(val)));
    //const[select, setSelect] = useState(filtering);

    return(
        <section className="main-content">
            <div className="category">
                <p>상품갯수</p>
                <div className="btns">
                    <button type="button" onClick={listRating}>별점순</button>
                    <button type="button" onClick={listReview}>리뷰순</button>
                    <label htmlFor="mealtype">음식종류</label>
                    <select name="mealtype" id="mealtype" onChange={(e)=>listChange(e.target.value)} value={inputVal} >
                        <option value="all">종류선택</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Salad">Salad</option>
                        <option value="Snacks">Snacks</option>
                    </select>
                    <label htmlFor="list-view">보기</label>
                    <select name="list-view" id="list-view" onChange={(e)=>viewChange(e.target.value)} value={view}>
                        <option value="6">6개씩보기</option>
                        <option value="12">12개씩보기</option>
                        <option value="18">18개씩보기</option>
                        <option value="24">24개씩보기</option>
                        <option value="30">30개씩보기</option>
                    </select>
                </div>
            </div>
            <div className="contents">
                <ul>
                    {list !== null && list !== undefined ? list.slice(0,view).map((item)=>(
                        <li key={item.id}>
                            <Link to={`/detail/${item.id}`}>
                                <img src={item.image} alt="#" /> 
                                <p className="product-name">{item.name}</p>
                                <p className="product-ingre">{item.ingredients}</p>
                                <p className="product-rating">⭐{item.rating} 💬{item.reviewCount}</p>
                            </Link>
                        </li>
                    )) : [...data].slice(0,view).map((item)=>(
                        <li key={item.id}>
                            <Link to={`/detail/${item.id}`}>
                                <img src={item.image} alt="#" /> 
                                <p className="product-name">{item.name}</p>
                                <p className="product-ingre">{item.ingredients}</p>
                                <p className="product-rating">⭐{item.rating} 💬{item.reviewCount}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}