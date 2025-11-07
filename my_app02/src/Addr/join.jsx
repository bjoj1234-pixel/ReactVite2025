import './Join.css'
import Postcode from './Postcode'

//회원가입 함수
export default function Join(){
    return(
        <div id="joinWrap">
            <h1>Join</h1>
            <p>회원가입하시면 다양한 혜택을 누리실 수 있습니다.</p>
            <div className="title">
                <h2>회원정보 입력</h2>
                <p>*필수 입력사항 입니다.</p>
            </div>
            <form action="#" method='post'>
                <ul className='joinForm'>
                    <li>
                        <label htmlFor="userID">아이디</label>
                        <input type="text" name="userID" id="userID" />
                    </li>
                    <li>
                        <label htmlFor="userPw">비밀번호</label>
                        <input type="password" name="userPw" id="userPw" />
                    </li>
                    <li>
                        <label htmlFor="userPwRe">비밀번호 확인</label>
                        <input type="password" name="userPwRe" id="userPwRe" />
                    </li>
                    <li>
                        <label htmlFor="userName">이름</label>
                        <input type="text" name="userName" id="userName" />
                    </li>
                    <li>
                        <label htmlFor="userEmail">이메일</label>
                        <input type="text" name="userEmail" id="userEmail" />
                    </li>
                    <li>
                        <label htmlFor="userPhone">휴대폰번호</label>
                        <input type="text" name="userPhone" id="userPhone" />
                    </li>
                    <li>
                        <label>주소</label>
                        {/* 이 부분에 postcode태그로 불러올 예정 */}
                        <Postcode />
                    </li>
                </ul>
                <button type='submit' id='joinBtn'>회원가입</button>
            </form>
        </div>
    )
}