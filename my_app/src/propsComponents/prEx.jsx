//부모 Parent04
function Parent04(){
    //화살표 함수 생성 sayHello() => alert('난 부모')
    const sayHello = () => {
        alert('난 부모');
    }
    return(
        <>
        {/* onClickEvent: 함수를 담당하는 이름. 속성X */}
            <Button01 onClickEvent={sayHello} />
        </>
    )
}
export default Parent04


//자식 Button01
function Button01(props){
    return(
        <>
            <button onClick={props.onClickEvent}>눌러보기</button>
        </>
    )
}