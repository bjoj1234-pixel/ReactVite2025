//함수이름은 반드시 대문자로 작성한다.
function Test12(){
    //문제 : score의 값에 따라 다른 색상을 표시하시오
    //score가 80이상이면 파란색,
    //score가 60이상이면 초록색,
    //그 이외는 빨간색으로 출력되도록 작성
    //단,삼항연산자 이용
    
    
    const score = 80;
    
    
    //함수 안에는 반드시 return()안에 작성
    return(
        // <></>빈태그 프래그먼트 이용해 작성
        <>
            <p style={{color: score >= 80 ? 'blue' : score >= 60 ? 'green' : 'red', fontSize:'30px',fontWeight:'700'}}>
                스코어
            </p>
        </>
    )
}
//Test12함수를 내보내기
export default Test12;