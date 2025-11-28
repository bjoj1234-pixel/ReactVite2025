import cookie from 'js-cookie';
import { useState } from 'react';

export default function CookieTest(){
    // cookie를 읽어와서 cookievalue 상태변수에 저장한다.
    // cookie에서 값을 읽어오는 명령어 cookie.get('key')
    // 쿠키가 1분뒤에 자동삭제 되면 홍길동이 화면에서 사라지게 하려면
    const [cookieValue, setCookieValue] = useState(cookie.get('userName'));
    
    // cookie를 저장하는 함수 생성
    const cookieSave = () =>{
        // cookie의 값을 저장할때 명령어 cookie의.set(key, value, expires)
        // cookie의 값을 저장할때 명령어 cookie의.set(키, 값, 만료시간)
        
        // {expires:1} => 1일동안 유지
        //cookie.set('userName','홍길동',{expires:1});

        // 1분동안만 userName이 유지되도록 변경
        // 1초 = 1000ms, 1분 =60초, 고로 1분 = 60 * 1000
        // path는 저장되는 로컬경로를 지정하는것임. 안하는경우 오류뜰수있음.
        const oneMin = new Date(Date.now() + 1*60*1000);
        cookie.set('userName','홍길동',{expires:oneMin, path:'/'});

        setCookieValue('홍길동');
        alert('쿠키 저장됨');
    }

    // cookie 확인하는 함수 생성
    const cookieChk = ()=>{
        const value = cookie.get('userName');
        // cookie.get()은 값이 없으면 undefined를 반환한다.
        console.log(value);
        if(value !== undefined){
            // cookie에 저장된 값이 존재한다.
            alert(`쿠키 ${value}`);
        }else{
            alert('쿠키가 없습니다.');
            setCookieValue('');
        }
    }

    // cookie 삭제하는 함수 생성
    const cookieDel = () =>{
        // cookie.remove('key')
        cookie.remove('userName');
        setCookieValue('');
        alert('쿠키가 삭제 되었습니다.');
    }

    return(
        <div>
            <h2>쿠키 예제</h2>
            <p>현재 쿠키 값 : {cookieValue}</p>
            <button type='button' onClick={cookieSave}
            style={{backgroundColor:'dodgerblue',color:'#fff'}}>쿠키 저장</button>
            <button type='button' onClick={cookieChk}
            style={{backgroundColor:'dodgerblue',color:'#fff'}}>쿠키 확인</button>
            <button type='button' onClick={cookieDel}
            style={{backgroundColor:'dodgerblue',color:'#fff'}}>쿠키 삭제</button>
        </div>
    )
}