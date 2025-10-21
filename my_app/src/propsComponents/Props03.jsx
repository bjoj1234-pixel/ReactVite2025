
function Product({name,price}){
    return(
        <>
            <div style={{width:'200px',border:'1px solid #ccc'}}>
                <h5 style={{fontSize:'20px'}}>{name}</h5>
                <p>가격: {price.toLocaleString('ko-kr')}원</p>
            </div>
        </>
    )
}
export default Product