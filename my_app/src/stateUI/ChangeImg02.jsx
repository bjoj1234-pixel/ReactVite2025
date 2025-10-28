import { useState } from "react";

export default function ChangeImg02(){
        const[imgSrc, setImgSrc] = useState("/images/tree-5.jpg");
 

    return(
        <>
            <img src={imgSrc} onMouseEnter={()=>setImgSrc("/images/tree-4.jpg")} onMouseLeave={()=>setImgSrc("/images/tree-5.jpg")} />
    
        </>
    )
}