import { FaHeart } from "react-icons/fa";
import { BsHandbagFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Navbar({ setShowCartList }) {
    return (
        <div>
            <nav className="nav">
                <Link to={"/"}>
                    <img src="logo.png" alt="" />
                </Link>
                <ul className="links">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/Shop"}>Shop</Link>
                    <Link to={"/Blog"}>Blog</Link>
                    <Link to={"/About us"}>About Us</Link>
                    <Link to={"/Contact"}>Contact</Link>
                </ul>
                <div className="sebag">
                    <Link to={"/wishlist"}>
                        <FaHeart className="icon" />
                    </Link>
                    <BsHandbagFill className="icon" onClick={() => setShowCartList(true)} />
                    <div className="cart">
                        <div className="cart_number">0</div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
