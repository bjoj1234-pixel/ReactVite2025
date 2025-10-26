// 모달창
export default function MovieModal(props){
   

    return(
        <>
            {/* 모달창 */}
            <div style={{position:'absolute', left:'50%',top:'50%',transform:'translate(-50%,-50%)',width:'500px',height:'300px',backgroundColor:'#fff',color:'#000', zIndex:2}}>
                <h3>{props.inputMov[props.ind].title}</h3>
                <p>{props.inputMov[props.ind].review}</p>
                <button onClick={()=>{
                    props.setmodal(false);
                }}>닫기</button>
            </div>
            {/* 검은배경 */}
            <div style={{position:'fixed', left:0,right:0,top:0,bottom:0,width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.5)',zIndex:1}}></div>
        </>
    )
}