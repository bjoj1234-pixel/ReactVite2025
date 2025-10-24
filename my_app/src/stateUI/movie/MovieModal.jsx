import { useState } from "react";

// 모달창
export default function MovieModal(props){
   

    return(
        <>
            <div style={{position:'absolute', left:'50%',right:'50%',transform:'translate(-50%,-50%)',width:'500px',height:'300px',backgroundColor:'#fff',zIndex:2}}>
                <h3>{props.tit[props.index]}</h3>
                <p>{props.rev[props.index]}</p>
                <button onClick={()=>{
                    props.setModalOpen(false);
                }}>닫기</button>
            </div>
            <div style={{position:'fixed', left:0,right:0,top:0,bottom:0,width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.5)',zIndex:1}}>
                
            </div>
        </>
    )
}