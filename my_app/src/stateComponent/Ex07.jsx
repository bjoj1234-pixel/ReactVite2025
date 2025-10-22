import React,{useState} from 'react';

export default function Exstate07(){

    const[bgcolor, setBgcolor] = useState(0);

    const colorChange = () => {

        setBgcolor(bgcolor + 1);

    }
    
    return(
        <>
            <div style={{backgroundColor: bgcolor % 3 === 0 ? 'red': bgcolor % 3 === 1 ? 'green': 'blue', width:'100px',height:'100px'}}></div>


            <button type='button' onClick={colorChange}>다음 색상</button>
        </>
    )
}