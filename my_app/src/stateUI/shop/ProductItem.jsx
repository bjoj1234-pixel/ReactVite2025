export default function ProductItem(props){
    
    return(
        <>
            <li>
                {props.product.name} - {props.product.price}원
                <button type="button" onClick={()=>props.addCart(props.product)}>담기</button>
            </li>
        </>
    )
}