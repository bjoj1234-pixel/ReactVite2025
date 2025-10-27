export default function CartModal(props){
    
    return(
        <>
           <div style={{position:'fixed',left:0,top:0,width:'100%',height:'100%',background:'rgba(0,0,0,0.2)',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div style={{backgroundColor: '#fff', padding:'20px',borderRadius:'5px',width:'300px'}}>
                    <h3>장바구니</h3>
                    {/* cart.length === 0이면 '비어있습니다.'
                        아니면 랜더해서 그리기
                    */}
                    {props.cart.length === 0 ? <p>비어 있습니다.</p>
                    : <ul>
                        {props.cart.map((cartItem)=>(
                            <li key={cartItem.id}>
                                <span>{cartItem.name} X {cartItem.quantity}</span>
                            </li>
                        ))}
                    </ul>
                    }
                    <button type="button" onClick={props.onClose}>닫기</button>
                </div>
           </div>
        </>
    )
}