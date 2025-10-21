function Test13(){

    const isActive = true;

    return(
        <>
            <div className={isActive === true ? 'box active':'box'}>
            </div>                
        </>
    )
}
export default Test13;