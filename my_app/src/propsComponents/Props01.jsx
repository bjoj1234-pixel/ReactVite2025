function Welcome(props){
    return(
        <>
            <p style={{fontSize:'24px',fontWeight:'700'}}>
                안녕하세요, {props.name}님!
            </p>
        </>
    )
}
export default Welcome