export default function CartList(props){

    return(
        <>
            <div className="modal-wrap">
                <h3>장바구니</h3>
                <ul>
                    {props.cart.map((item,index)=>(
                        <li>
                            <p className="cart-name">{item.name}</p>
                            <div className="cart-info">
                                <span>{item.price}원</span>
                                <div className="cart-quantity">
                                    <button type="button">-</button>
                                    <span className="num">{item.quantity}</span>
                                    <button type="button">+</button>
                                </div>
                            </div>
                        </li>
                    ))}


                </ul>
                <div className="pay">
                    <span>총 결제금액</span>
                    <span>원</span>
                </div>
            </div>       
        </>
    )
}