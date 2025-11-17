import { Link } from "react-router-dom"

export default function Header(){

    return(
        <header style={{backgroundColor:'#eee'}}>
            <div className="header-left">🎁Redux 쇼핑몰</div>
            <div className="header-right">
                <Link to='/'>Home</Link>
                <Link to='/cart'>Cart</Link>
                <Link to='/login'>로그인</Link>
            </div>
        </header>
    )
}