import { useState } from "react";

export default function ChangeImg04(){

        //조건에 만족하는 값을 하나가 아니라 여러개 배열로 추출하는 함수
        //=>배열이름.filter((요소, 인덱스, 원본배열) => {return 조건식;})
        //조건에 만족하는 새로운 배열을 반환한다.
        //조건에 만족하지 않으면 빈 배열 []을 반환한다.
        //imgs.filter((img)=>조건입력)=> 조건에 만족하는 요소를 배열로 반환 (예: [{id:1},{id:2},{id:3}...])

        //category 1,2 별로 각 탭메뉴에 출력
        const imgs = [
            { id: 1, name: 'pic-1.jpg', category: 1 },
            { id: 2, name: 'pic-2.jpg', category: 1 },
            { id: 3, name: 'pic-3.jpg', category: 1 },
            { id: 4, name: 'pic-4.jpg', category: 1 },
            { id: 5, name: 'tree-1.jpg', category: 2 },
            { id: 6, name: 'tree-2.jpg', category: 2 },
            { id: 7, name: 'tree-3.jpg', category: 2 },
            { id: 8, name: 'tree-4.jpg', category: 2 },
        ];

        const a = imgs.filter((item)=>item.category === 1);
        
        const[copyImgs, setCopyImgs] = useState(a);


        const chgImg = (cateNum) =>{
            const newImg = imgs.filter((item)=>item.category === cateNum);
            setCopyImgs(newImg);    
        }

    return(
        <>
            <div>
                <h3>이미지 탭 전환 예제</h3>
                <div>
                    <button onClick={()=>chgImg(1)}>배경</button>
                    <button onClick={()=>chgImg(2)}>나무</button>
                </div>
                <div>
                    {copyImgs.map((item)=>(
                        <img src={'/images/'+item.name} key={item.id}/>
                    ))}
                </div>                
            </div>        
        </>
    )
}