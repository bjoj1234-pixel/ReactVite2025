import { useState } from "react";

//영화제목, 리뷰 입력구간
export default function MovieItem(props){
    const[inputTit, setInputTit] = useState('');
    const[inputReview, setInputReview] = useState('');
    //취소 모달상태
    const[modalOpen, setModalOpen] = useState(false);

    let movAdd = () => {

        //영화 배열을 얕은복사
        let copyMov = [...props.inputMov];

       // 입력받은 값(제목, 리뷰) 없으면 메시지창
       if(!inputTit){
            return setModalOpen(true);
       }
       
       // 입력받은 값(제목, 리뷰) 추가
       copyMov.unshift({title:inputTit, review:inputReview});

       //unshift때문에 재배열후 id에 인덱스값 저장
       copyMov = copyMov.map((item,index)=>(
            {...item, id: index}
        ));      
       
       // 영화 배열 재세팅
       props.setinputMov(copyMov);
       
       //input 입력창 초기화
       setInputTit('');
       setInputReview('');

       console.log(copyMov);
    }


    return(
        <>
            <div>
                {/* 영화 제목입력 input */}
                <input type="text" onChange={(e)=>setInputTit(e.target.value)} value={inputTit} placeholder="영화 제목"/>
                
                {/* 영화 리뷰입력 input */}
                <input type="text" onChange={(e)=>setInputReview(e.target.value)} value={inputReview} placeholder="리뷰"/>
                
                {/* 추가버튼 */}
                <button onClick={movAdd}>추가</button>
            </div>
            {modalOpen && <Empty setModal={(a)=>setModalOpen(a)}/>}
        </>
    )
}

// 영화제목 입력 안하고 추가 눌렀을때 모달창
function Empty(props){
    return(
        <>
            {/* 모달창 */}
            <div style={{position:'absolute', left:'50%',top:'50%',transform:'translate(-50%,-50%)',width:'500px',height:'300px',backgroundColor:'#fff',color:'#000', zIndex:2}}>
                <h3>영화 제목을 입력해주세요</h3>
                <button onClick={()=>{
                    props.setModal(false);
                }}>닫기</button>
            </div>
            {/* 검은배경 */}
            <div style={{position:'fixed', left:0,right:0,top:0,bottom:0,width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.5)',zIndex:1}}></div>
        </>
    )
}