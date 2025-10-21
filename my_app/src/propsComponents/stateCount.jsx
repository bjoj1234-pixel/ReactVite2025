function Counter01(){
    //버튼 클릭시 콘솔값은 누적되어 보여지나,
    //화면의 현재 카운트의 숫자는 변하지 않는다.
    //이유: count는 단순히 메모리 안에서만 값이 변경되는데
    //      React는 값이 변경된걸 알지 못한다.
    //값이 동적으로 변해야 하는 경우는 무조건 useState() 훅(hook)사용.
    let count = 0

    function inCrease(){
        count = count + 1
        console.log('count 누적'+count)
    }

    return(
        <>
            <p>현재 카운트 : {count}</p>
            <button type="button" onClick={inCrease}>+1</button>
        </>
    )
}
export default Counter01