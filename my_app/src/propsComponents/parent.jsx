//자식 컴포넌트인 child()를 import함
import Child from "./child"

function Parent(){
    return(
        <>
            <Child name='홍길동'/>
            <Child name='개나리'/>
            <Child name='진달래'/>
        </>
    )
}
export default Parent