import { useState } from "react";

export default function Hover01(){
    //isHovered = false면 hover 안된 상태
    const[isHovered, setIsHovered] = useState(false);

    return(
        <>  
            <div onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
            style={{backgroundColor: isHovered ? 'blue':'gray', padding:'20px',cursor:'pointer'}}
            >
                호버하면 색이 변합니다.
            </div>
        </>
    )

}