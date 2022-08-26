import ait from "../../assets/logo-white.png"
import "./header.css";
import { Link } from "react-router-dom";
const Header = () =>{
    return(
        <>
            <header>
                <div>
                    <img src={ait} alt="logo" />
                </div>
                <nav>
                    <ul>
                        <li>
                            {/* <a href="#">Home</a> */}
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            {/* <a href="#">About</a> */}
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            {/* <a href="#">Products</a> */}
                            <Link to='/products'>Products</Link>
                        </li>
                        <li>
                            <a href="#">Blogs</a>
                        </li>
                        <li>
                            <a href="#">Clients</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;