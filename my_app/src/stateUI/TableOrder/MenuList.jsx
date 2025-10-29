export default function MenuList(props){

    return(
        <>              
            {props.selMenu === props.bestMenu ? 
            //보여지는 리스트가 베스트10 메뉴이면 해당 ul출력
                //누적주문이 한개도 없으면 아래 ul출력
                props.selMenu.length === 0 ? 
                    <p className="notice">아직 주문내역이 없습니다. 주문내역이 있을시 베스트10 집계됩니다.</p>

                //누적주문이 한개이상 있으면 아래 ul출력
                :<ul>
                    {props.selMenu.map((item,index)=>(                    
                        <li key={item.id} onClick={()=>props.addCart(props.selMenu,item)} className="best10">
                            <div className="menuImg" style={{backgroundImage:`url(/tableImg/${item.img})`}}>
                                {/* 메뉴이미지 백그라운드 */}
                            </div>
                            <p className="menu-name">{item.name}</p>
                            <p className="menu-price">{item.price}</p>
                        </li>
                    ))}
                </ul>               
            //보여지는 리스트가 베스트10 메뉴외에 다른거면 해당 ul출력
            :<ul>
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
            }                  
        </>
    )
}