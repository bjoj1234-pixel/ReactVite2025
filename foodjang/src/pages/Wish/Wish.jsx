import '../Wish/Wish.css'
import { useState, useContext } from "react";
import { AuthContext } from '../../AuthContext';
import { Link } from "react-router-dom";

export default function Wish({data}){
    const{wishList, wishHandler} = useContext(AuthContext);
    

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
                    {wishList !== null && list !== undefined ? list.slice(0,view).map((item)=>(
                        <li key={item.id}>
                            <Link to={`/detail/${item.id}`}>
                                <img src={item.image} alt="#" /> 
                                <p className="product-name">{item.name}</p>
                                <p className="product-ingre">{item.ingredients}</p>
                            </Link>
                                <p className="product-rating">⭐{item.rating} 💬{item.reviewCount} 
                                    <button type="button" onClick={()=>wishHandler(item.id)}>{wishList[item.id]?'🧡찜해제':'🤍찜하기'}</button>
                                </p>
                            
                        </li>
                    )) : [...data].slice(0,view).map((item)=>(
                        <li key={item.id}>
                            <Link to={`/detail/${item.id}`}>
                                <img src={item.image} alt="#" /> 
                                <p className="product-name">{item.name}</p>
                                <p className="product-ingre">{item.ingredients}</p>
                            </Link>
                                <p className="product-rating">⭐{item.rating} 💬{item.reviewCount} 
                                    <button type="button" onClick={()=>wishHandler(item.id)}>{wishList[item.id]?'🧡찜해제':'🤍찜하기'}</button>
                                </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )

}