import { useState } from "react";

export default function Hover02(){
    //isTooltip = false면 Tooltip이 안보임
    const[isTooltip, setIsTooltip] = useState(false);

    return(
        <div>  
            <button type="button"
            onMouseEnter={()=>setIsTooltip(true)}
            onMouseLeave={()=>setIsTooltip(false)}>마우스를 올려보세요</button>
            {isTooltip && <div style={{backgroundColor: '#000', color: '#fff'}}>도움말 메시지</div>}
            {/* => 같은 표현 */}
            {/* {isTooltip ? <div style={{backgroundColor: '#000', color: '#fff'}}>도움말 메시지</div> : null} */}
        </div>
    )

}