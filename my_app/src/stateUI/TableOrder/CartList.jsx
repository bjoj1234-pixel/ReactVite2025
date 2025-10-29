export default function CartList(props){

    return(
        <>
            <div className="modal-wrap" style={{right: props.showCart ? '0px' : '-260px'}}>
                <button type="button" className="xBtn" onClick={()=>props.setShowCart(false)}>×</button>
                <h3>장바구니</h3>
                <ul>
                    {props.cart.map((item,index)=>(
                        <li key={index}>
                            <p className="cart-name">{item.name}</p>
                            <div className="cart-info">
                                <span>{(item.price*item.quantity).toLocaleString('ko-kr')}원</span>
                                <div className="cart-quantity">
                                    <button type="button" onClick={()=>props.updateNum(item,-1)}>-</button>
                                    <span className="num">{item.quantity}</span>
                                    <button type="button" onClick={()=>props.updateNum(item,1)}>+</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="pay">
                    <span>총 결제금액</span>
                    <span>원</span>
                    <span>{(props.totalPay).toLocaleString('ko-kr')}</span>                    
                </div>
                <button type="button" className="order" 
                onClick={()=>{props.setShowCart(false);
                    props.addOrderList();
                    props.setCart([]);
                    props.setTotalPay(0);
                    props.setTotalNum(0);
                    }}>주문하기</button>
            </div>       
        </>
    )
}