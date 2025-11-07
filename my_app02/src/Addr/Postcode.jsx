//설치한 react-daum-postcode를 import해야 주소검색 사용가능하다.
import DaumPostCode from 'react-daum-postcode';
import { useState } from 'react';
import './Postcode.css'

export default function Postcode(){
    const[zipcode, setZipcode] = useState('');//우편번호
    const[address, setAddress] = useState('');//주소
    //모달 상태 함수
    const[isOpen, setIsOpen] = useState(false); //검색버튼 누르기 전

    const completeHandler = (data) =>{
        //우편번로 검색을 도로명 또는 지역명으로 입력
        let arr =''
        if(data.userSelectedType==='R'){
            arr = data.roadAddress;//도로명 주소
        }else{
            arr = data.jibunAddress;//지역명 주소
        }
        setZipcode(data.zonecode);
        setAddress(arr);
        setIsOpen(!isOpen);
    }
    // 모달 보이기/숨기기
    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    return(
        <div>
            <input type="text" value={zipcode} placeholder='우편번호' readOnly name='post' id='post'/>
            <button type='button' id='userAddSearch' onClick={toggle}>우편번호 검색</button>
            <input type="text" value={address} placeholder='도로명 주소' name='userAddress' id='userAddress' />
            <input type="text" placeholder='상세 주소' name='detailAddress' id='detailAddress' />
            
            {/* 모달 만들기 */}
            {isOpen && (
                <div className='modalOverlay' onClick={toggle}>
                    <button className='closeBtn' onClick={toggle} style={{color:'#fff'}}>X</button>
                    <DaumPostCode onComplete={completeHandler}  style={{height:'500px',width:'500px'}}/>
                </div>
            )}            
        </div>
    )
}