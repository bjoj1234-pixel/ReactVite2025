//구조분해 할당이란: 변수지정한 값
//props는 부모 -> 자식으로 데이터를 전달한다.
//단, 읽기전용 데이터이다.
//자식은 데이터를 수정할 수 없다.
//서로 다른 파일에 존재하더라도 props로 가져오기 됨
//다만, props.name 직접 입력한다.
//{name}인 구조 분해 할당을 이용해도 된다.
function Child({name}){
    return(
        <>
        {/* props.name */}
            <h2>안녕하세요~{name}님</h2>
        </>
    )
}
export default Child