import React,{useState} from "react";

export default function ShoppingList(){
    const [items, setItems] = useState([
        { id:0, name: '우유', done: false },
        { id:1, name: '계란', done: false },
    ])

    //물건입력값
    const[inputItem, setInputItem] = useState('');

    //물건 추가
    const addItem = () =>{
        let copyItem = [...items];
        copyItem.unshift({id: items.length+1, name: inputItem, done: false});

        setItems(copyItem);
        setInputItem('');
    }
    //물건 삭제
    const delItem = (index) =>{
        let copyItem = [...items];
        copyItem.splice(index,1);

        setItems(copyItem);
    }
    //구매완료 클릭시
    const buyClick = (index) =>{
        let copyItem = [...items];

        if(copyItem[index].done === false){
            copyItem[index].done = true
        }
        setItems(copyItem);
    }





    return(
        <>
            <div className="container">
                <h3>🛒 쇼핑 리스트</h3>
                <div className="input-area">
                    <input type="text" placeholder="물건 이름 입력" onChange={(e)=>{setInputItem(e.target.value)}} value={inputItem}/>
                    <button onClick={addItem}>추가</button>
                </div>
                <ol className="shopping-list">
                    {items.map((item,index)=>(
                        <li key={item.id}>
                            <span className={String(item.done)}>{item.name}</span>
                            <button onClick={(e)=>{
                                buyClick(index);
                                e.target.innerText='취소'
                            }}>구매완료</button>
                            <button onClick={()=>(delItem(index))}>삭제</button>
                        </li>
                    ))}
                </ol>
            </div>        
        </>
    )
}