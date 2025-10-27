// 자식은 UI
export default function PostList(props){
    const today = new Date();
    const month = today.getMonth();
    const date = today.getDate();
        
    return(
        <>
            <ul>
                {props.posts.map((item,index)=>(
                <li key={index} style={{listStyle:'none'}}>
                    {/* 태그안에 함수 동시에 두개 불러오기 */}
                    <h4 onClick={()=>{props.setModalOpen(true); props.setSelectedIndex(index);}}>{item}👍
                        <span onClick={(e)=>{
                            //버블링 : 자식을 선택해도 부모요소인 <h4>태그가 실행됨
                            //버블링을 해결하는 메소드 : e.stopPropagation()
                            e.stopPropagation();
                            props.addLikes(index);}}
                            style={{display:'inline-block',cursor:'pointer',width:'15px'}}> {props.likes[index]}</span>
                    </h4>
                    <p>{month+1}월 {date}일 발생</p>
                    <button onClick={()=>(props.delPost(index))}>삭제</button>
                </li>
                ))}            
            </ul>
        </>
    )
}