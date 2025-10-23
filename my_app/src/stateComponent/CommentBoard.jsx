import React,{useState} from "react";

export default function CommentBoard(){
    const [comments, setComments] = useState([
        { id:0, text: '리액트 재밌어요!', like: 0 },
        { id:1, text: 'useState 너무 신기해요', like: 0 },
    ]);

    //댓글 입력값
    const[inputComment, setInputComment] = useState(''); 

    //등록버튼 클릭시
    const resistBtn = () =>{
        let copyComments = [...comments];
        copyComments.unshift({id: copyComments.length+1, text: inputComment, like: 0})
        setComments(copyComments);
        console.log(copyComments);
        setInputComment('');
        
    }
    //삭제버튼 클릭시
    const delBtn = (index) => {
        let copyComments = [...comments];
        copyComments.splice(index,1);
        setComments(copyComments);
    }
    //좋아요 클릭시
    const likeBtn = (index) => {
        let copyComments = [...comments];
        copyComments[index].like += 1;
        setComments(copyComments);
    }

      
    return(
        <>
            <CommentItem comArray={comments} Input={inputComment} setInput={setInputComment} resist={resistBtn} del={delBtn} like={likeBtn}/>
        </>
    )
}

//댓글 컴포넌트
function CommentItem(props){  

    return(
        <>
            <div className="container">
                <h3>💬 댓글 게시판</h3>
                <div className="input-area">
                    <input type="text" placeholder="댓글 입력" onChange={(e)=>{props.setInput(e.target.value)}} value={props.Input}/>
                    <button onClick={props.resist}>등록</button>
                </div>
                <ol className="comment-list">
                    {props.comArray.map((item,index)=>(
                        <li key={item.id}>
                            <span>{item.text}</span>
                            <a href="#" onClick={()=>props.like(index)}>👍 {item.like}</a>
                            <button onClick={()=>props.del(index)}>삭제</button>
                        </li>
                    ))}  
                </ol>
            </div>    
            
        </>
    )
}