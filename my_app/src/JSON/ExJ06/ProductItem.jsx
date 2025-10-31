export default function ProductItem(props){

    return(
        <>
            {props.data.slice(0,20).map((item)=>(
                <li key={item.id}>
                    <img src={item.img} alt="" />
                    <p className="title">{item.name}</p>
                    <p>{Number(item.price).toLocaleString('ko-kr')}원</p>            
                </li>
            ))}
        </>
    )

}