export default function FoodApp(props){

    return(
        <>
            <ul style={{padding:'0px'}}>
                {/* 음식목록 */}
                {props.foods.map((item,index)=>(
                    <li key={item.id} style={{listStyle:'none',fontSize:'23px',textAlign:'right'}}>
                        <span>{item.name}: {item.price.toLocaleString('ko-kr')}</span>
                        <button type="button" onClick={()=>(props.addCart(item))} style={{backgroundColor: '#ff8383',color:'#fff',fontSize: '17px',fontWeight: '700',lineHeight: '21px',border: '3px solid #ffffff',boxShadow: '0 0 5px #ff8181',margin:'10px 0 10px 18px'}}>담기</button>                        
                    </li>
                ))}
            </ul>        
        </>
    )
}