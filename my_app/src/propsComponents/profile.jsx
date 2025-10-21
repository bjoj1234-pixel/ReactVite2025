//부모컴포넌트 생성: Parent03
//부모 const userName = '진달래'
//    const age =25
function Parent03(){
    const userName = '진달래'
    const age =25

    return(
        <>
            <Profile name={userName} age={age}/>
        </>
    )
}
export default Parent03



//자식 컴포넌트 생성: Profile
function Profile(props){
    return(
        <>
            <div>
                <h2>이름 : {props.name}</h2>
                <p>나이: {props.age}</p>
            </div>
        </>
    )
}