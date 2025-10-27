export default function CartModal(props){

    return(
        <>
            <div style={{position:'fixed', left:0,right:0,top:0,bottom:0,width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.5)',zIndex:1}}>
                <div style={{position:'absolute', left:'50%',top:'50%',transform:'translate(-50%,-50%)',width:'500px',height:'300px',backgroundColor:'#fff',color:'#000', zIndex:2}}>
                    <h3>장바구니</h3>               
                    {props.cart.length === 0 ? <p>장바구니가 비었습니다.</p> :
                    <ul>
                        {props.cart.map((item,index)=>(
                           <li key={item.id} style={{listStyle:'none'}}>
                                <span>{item.name}</span>
                                <button type="button" onClick={()=>props.Update(item,-1)}>-</button>
                                <button type="button">{item.quantity}</button>
                                <button type="button" onClick={()=>props.Update(item,+1)}>+</button>
                                <button type="button" onClick={()=>props.delCart(item)}>삭제</button>
                           </li>
                        ))}
                    </ul>
                    }
                    <button type="button" onClick={()=>props.setIsCartOpen(false)}>닫기</button>
                </div>    
            </div>   
        </>
    )
}