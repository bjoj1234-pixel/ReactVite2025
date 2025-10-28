import { useState } from "react";

export default function Hover04(){
    //이동할 탭 찾을 때 사용
    const[activeTab, setActiveTab] = useState(null);
    const tabs = [
        {id:1, title:'HTML', content:'HTML은 웹의 구조를 담당한다.'},
        {id:2, title:'CSS', content:'CSS는 스타일을 담당한다.'},
        {id:3, title:'JavaScript', content:'JS는 동작을 담당한다.'},
    ]
    //활성화된 탭의 내용찾는 코드 필요
    //배열이름.find((요소,인덱스,원본배열)=>{return조건})
    //조건을 만족하는 첫 번째 요소(그 객체 또는 값)을 반환
    //만약 못 찾으면 undefined를 반환
    //검색이나 상세보기에 활용
    let contentText ="탭 위에 마우스를 올려보세요" //기본 text
    if(activeTab !== null){
        //activeTab과 같은 id를 가진 탭을 찾아야 함
        //결론 activeTab는 1 또는 2 또는 3
         const findTab = tabs.find((tab)=>tab.id === activeTab)
         console.log('여기까지');
         console.log(findTab);
        // 탭을 찾았으면 그 내용(content)을 변경
        if(findTab){
            console.log('여기까지2');
            console.log(findTab);
            
            contentText = findTab.content;
            
            console.log(contentText);
        }
    }

    return(
        <div style={{width:'400px', margin:'50px auto'}}>
            <h3>Hover Tab Menu</h3>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                {/* map() => 반드시 태그의 고유 번호(=유일)가 필요 */}
                {/* 고유 key={item.id} */}
                {tabs.map((item)=>(
                    <div key={item.id} style={{cursor:'pointer'}}
                    onMouseEnter={()=>setActiveTab(item.id)}
                    onMouseLeave={()=>setActiveTab(null)}
                    
                    
                    >{item.title}</div>
                ))}
            </div>
            {/* 탭영역 */}
            <div style={{marginTop:'20px',padding:'15px',backgroundColor:'#fefefe',borderRadius:'5px',height:'50px'}}>
                <div>{contentText}</div>
            </div>
        
        </div>
    )

}