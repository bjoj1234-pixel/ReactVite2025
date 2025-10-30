import { useState, useEffect } from "react";

export default function Ex10(){
    const users = [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com' },
        { id: 4, name: 'David', email: 'david@example.com' }
    ];
    //인풋입력값
    const[inputText, setInputText] = useState('');
    //filter한 목록을 담아주는 변수
    const[filterList, setFilterList] = useState([]);

    //입력시 받아옴
    const inputChange = (e) => {
        setInputText(e.target.value);
    }    

    useEffect(()=>{
        //input에 스페이스바 입력으로 인해 공백이 있더라도, 리스트가 나오게하는 예외처리
        // !inputText.trim() == false(트림으로 공백뺐을때, 글자가 없으면 = 즉 공백만 있을때),
        //  inputText.trim() == true(트림으로 공백뺐을때, 글자가 있으면 = 즉 글자가 있으면)
        if(!inputText.trim()){
            setFilterList(users);
            return
        }
        const copyU = [...users];
        //배열이름.filter((요소),(인덱스),(원본배열)=>{return조건})
        //조건에 만족하는 요소들을 배열로 반환한다. 만족하지 않으면 빈배열을 반환한다.
        const filtering = copyU.filter((item)=>item.name.toLowerCase().includes(inputText.toLowerCase()));

        // 이름 & 이메일 검색조건시
        // const filtering = copyU.filter((item)=>(
        //     item.name.toLowerCase().includes(inputText.toLowerCase()) || item.email.toLowerCase().includes(inputText.toLowerCase())
        // ));

        setFilterList(filtering);

    },[inputText])



    return(
        <> 
            <h2>간단 사용자 검색</h2>
            <input type="text" value={inputText} onChange={inputChange} placeholder="이름 또는 이메일 검색" />
            <ul>
                {filterList.map((item,index)=>(
                    <li key={item.id}>
                        <strong>{item.name}</strong> {item.email}
                    </li>
                ))}
                {filterList.length === 0  && <p>검색결과가 없습니다</p>}
            </ul>
           
        </>
    )
}
