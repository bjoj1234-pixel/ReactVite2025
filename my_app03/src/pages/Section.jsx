import { useEffect } from "react";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { setData } from "../store02/productSlice";
import { insertItem } from "../store02/cartSlice"
import './Section.css'


export default function Section(){
    const dispatch = useDispatch();
    const items = useSelector((state)=>state.product.items);

    useEffect(()=>{
        const load = async() =>{
            try{
                const res = await axios.get('https://dummyjson.com/products');
                console.log(res.data.products);
                //useState를 쓴건 아니지만 setData로 작명하여 데이터를 보낸후 스토어에 저장(약속같은것)
                //반드시 데이터를 내보내야 하기때문에 dispatch()로 시작
                dispatch(setData(res.data.products));
            }catch(err){
                console.log('데이터 요청 실패:',err);
            }finally{
                console.log('요청완료');
            }
        }
        load();
    },[dispatch]);

    //핸들러 함수 생성
    //장바구니에 상품이 클릭되어 담길때마다 alert창 띄우기
    const clickHandler = (product)=>{
        dispatch(insertItem(product))
        alert('장바구니에 담겼습니다')
    }

    return(
        <section>
            <h2>상품 목록</h2>
            <ul>
                {items.map((item,index)=>(
                    <li key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <button type="button" onClick={()=>clickHandler(item)}>카트추가</button>
                    </li>
                ))}
            </ul>
        </section>
    )
}