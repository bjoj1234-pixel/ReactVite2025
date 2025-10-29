export default function OrderList(props){

    return(
        <>
            <div className="modal-wrap order" style={{right: props.showOrder ? '0px' : '-260px'}}>
                <button type="button" className="xBtn" onClick={()=>props.setShowOrder(false)}>×</button>
                <h3>주문내역</h3>
                <ul>
                    {props.orderList.map((item,index)=>(
                        <li key={index}>
                            <p className="cart-name">{item.name}</p>
                            <div className="cart-info">
                                <span>{(item.price*item.order).toLocaleString('ko-kr')}원</span>
                                <div className="cart-quantity">
                                    <span className="num">{item.order}개</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="pay">
                    <span>총 결제금액</span>
                    <span>원</span>
                    <span>{(props.orderPay).toLocaleString('ko-kr')}</span>                    
                </div>
            </div>       
        </>
    )
}