export default function MenuList(props){

    return(
        <>
            <ul>
                {props.selMenu.map((item,index)=>(
                    <li key={item.id} onClick={()=>props.addCart(props.selMenu,item)}>
                        <div className="menuImg" style={{backgroundImage:`url(/tableImg/${item.img})`}}>
                            {/* 메뉴이미지 백그라운드 */}
                        </div>
                        <p className="menu-name">{item.name}</p>
                        <p className="menu-price">{item.price}</p>
                    </li>
                ))}                
            </ul>        
        </>
    )
}