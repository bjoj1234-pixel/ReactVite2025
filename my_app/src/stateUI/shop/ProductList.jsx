import ProductItem from "../shop/ProductItem"

export default function ProductList(props){
    
    return(
        <>
            <ul>
                {props.products.map((item,index)=>(
//                 자식 컴포넌트 ProductItem 태그로 가져온다.
                    <ProductItem key={item.id} product={item} addCart ={props.addCart} />
                ))}
            </ul>
        </>
    )
}