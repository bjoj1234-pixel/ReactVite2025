import { Link } from "react-router-dom";
import './Header.css';

export default function Header(){
    return(
        <>
            <header>
                <div className="header-wrap">
                    <div className="a-link">
                        <Link to='/'>로그인</Link>
                        <Link to='/'>회원가입</Link>
                        <Link to='/'>고객센터</Link>
                    </div>
                    <div className="logo-wrap">
                        <Link to='/'>
                            <img src="../img/logo.gif" alt="로고" />
                        </Link>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/new'>신상품</Link>
                            </li>
                            <li>
                                <Link to='/new'>베스트</Link>
                            </li>
                            <li>
                                <Link to='/new'>알뜰쇼핑</Link>
                            </li>
                            <li>
                                <Link to='/new'>선물세트</Link>
                            </li>                        
                        </ul>
                    </nav>
                </div>
                <div className="header-border"></div>
            </header>
        </>
    )
}