import React,{useState} from "react";

export default function ScoreManager(){
    const [score, setScore] = useState([
        { id:1, name: '김철수', score: 85 },
        { id:2, name: '이영희', score: 92 },
        { id:3, name: '박민수', score: 78 },
    ]);

    const onScoreIncrease = (index) =>{
        let copyScore = [...score];
        copyScore
    }

   

      
    return(
        <>
            <StudentCard data={score} student={score.name} score={score.score} />
        </>
    )
}

//댓글 컴포넌트
function StudentCard(props){  

    return(
        <>
            <div className="container">
                <h2>학생 점수 관리 시스템</h2>
                <ol>
                {props.data.map((item,index)=>{
                    <li>
                        <h4>{item.name}</h4>
                        <p>{item.score}</p>
                        <button>+10점</button>
                    </li>
                })}
                </ol>
            </div>
            
        </>
    )
}