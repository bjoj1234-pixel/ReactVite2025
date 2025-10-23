import React,{useState} from "react";

export default function MovieReview(){
    const[reviews, setReviews] = useState([
        { id:0, title: '인셉션', comment: '꿈속의 꿈! 최고였어요.', likes: 0 },
        { id:1, title: '인터스텔라', comment: '음악이 너무 웅장해요.', likes: 0 },
    ]);

    // 입력한 영화제목
    const[inputTitle, setInputTitle] = useState('');
    // 입력한 한줄평
    const[inputComment, setInputComment] = useState('');
    
    // 리뷰 추가 실행 함수
    const addReview = () =>{
        if(inputTitle === ''){
            return alert('영화 제목을 입력하세요');
        }
        if(inputComment === ''){
            return alert('한줄평을 입력하세요');
        }

        //리뷰 데이터 얕은 복사
        let copyReviews = [...reviews];
        copyReviews.unshift({id:reviews.length+1, title: inputTitle, comment: inputComment, likes: 0});
        setReviews(copyReviews)
        
        //인풋초기화
        setInputTitle('')
        setInputComment('')
    }

    // 좋아요 실행 함수
    const addLikes = (index) =>{
        //리뷰 데이터 얕은 복사
        let copyReviews = [...reviews];

        copyReviews[index].likes += 1;
        setReviews(copyReviews)
    }

    // 삭제 실행 함수
    const delReview = (index) =>{
        //리뷰 데이터 얕은 복사
        let copyReviews = [...reviews];

        copyReviews.splice(index,1);
        setReviews(copyReviews)
    }


    return(
        <>
            <div className="container">
                <h3>🎬 나의 영화 리뷰</h3>
                <div className="input-area">
                    <input type="text" placeholder="영화 제목" onChange={(e)=>(setInputTitle(e.target.value))} value={inputTitle}/>
                    <input type="text" placeholder="한줄평" onChange={(e)=>(setInputComment(e.target.value))} value={inputComment}/>
                    <button onClick={addReview}>등록</button>
                </div>
                <ol className="review-list">
                    {reviews.map((item, index)=>(
                        <li key={item.id} >
                            <h4>{item.title}</h4>
                            <p>{item.comment}</p>
                            <a href="#" onClick={()=>(addLikes(index))}>👍 {item.likes}</a>
                            <button onClick={()=>(delReview(index))}>삭제</button>
                        </li>
                    ))}
                </ol>
            </div>        
        </>
    )
}