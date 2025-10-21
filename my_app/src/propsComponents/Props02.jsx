function UserCard02(props){
    return(
        <>
            <div style={{width:'200px',border:'1px solid #ccc'}}>
                <p>이름: {props.name}</p>
                <p>나이: {props.age}</p>
                <p>도시: {props.city}</p>
            </div>
        </>
    )
}
export default UserCard02