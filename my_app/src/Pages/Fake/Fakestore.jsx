import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './Fakestore.css'

export default function Fakestore({data}){


    return(
        <div>
            <h3>Fake Store</h3>
            <ul>
                {data.map((item)=>(
                    <li key={item.id}>
                        <Link to={`/products/${item.category}/${item.id}`}>
                            <img src={item.image} alt="#" />
                            <p className="title">{item.title}</p>
                            <p>{item.price}</p>
                            <p>{item.rating.rate}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}