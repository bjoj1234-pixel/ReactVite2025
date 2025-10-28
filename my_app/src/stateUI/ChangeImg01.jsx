import { useState } from "react";

export default function ChangeImg01(){
    const[imgUrl, setImgUrl] = useState('/images/boy.png');
    const[toggle, setToggle] = useState(false);

    const imgChange = () =>{
        setToggle(!toggle);
        toggle === false ?
        setImgUrl('/images/boy.png') : setImgUrl('/images/girl.png')        
    }

    return(
        <>
            <img src={imgUrl} alt="" />
            <button onClick={imgChange}>이미지 변경</button>
        </>
    )
}