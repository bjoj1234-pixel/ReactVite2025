import { useState, useEffect } from "react";

export default function Ex07(){
    const[current, setCurrent] = useState(new Date());

    useEffect(()=>{

        const time = setInterval(()=>{
            setCurrent(new Date()); //current를 넣으면, 같은 주소이기 때문에 렌더링 실행을 안함. 그래서 멈춰버림
        },1000);

        return () => {clearInterval(time)}
    })
    // 시분초 두자리수로 출력하는 함수(00)
    // 10이하의 모든 숫자 앞에 0을 붙인다.
    const twoTime = (num) => (num < 10 ? `0${num}` : num);
    const hour = twoTime(current.getHours());
    const minute = twoTime(current.getMinutes());
    const second = twoTime(current.getSeconds());


    return(
        <> 
         <div className="clock">
            <h3>DIGITAL CLOCK</h3>
            <p> 
                {/* 시 : 분 : 초 => 00:00:00 */}
                {/* {String(hours+100).slice(1,3)}:
                {String(minutes+100).slice(1,3)}:
                {String(seconds+100).slice(1,3)} */}
                {hour}:{minute}:{second}
            </p>
            {/* 날짜: 2025년 10월 30일 목요일 */}
            {/* 현재 지역의 날짜를 영문법으로 출력하는 함수 */}
            <p>{current.toLocaleDateString()}</p>
         </div>
        </>
    )
}