import Title from "./Title";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/userContext";
import { useSelector } from "react-redux";
const Header = () => {
    const [login, setLogin] = useState(true)
    const authenticateUser = () => {
        if (login === true) {
            return setLogin(false)
        }
        else {
            return setLogin(true)
        }

    }
    const { user } = useContext(UserContext)
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);
    return (
        <div className="flex py-3 justify-between bg-pink-200 shadow-lg">
            <Title />
            <div >
                <ul className="flex">
                    <li className="px-2" ><Link to="/" >Home</Link></li>
                    <li className="px-2" ><Link to="/about" >About</Link></li>
                    <li className="px-2" ><Link to="/contact" >Contact</Link></li>
                    <li className="px-2" ><Link to="/instamart" >Insta Mart</Link></li>
                    <li className="px-2" ><Link to="/cart" >Cart-{cartItems.length} items</Link></li>
                </ul>
            </div>
            <h1 className=" font-bold" >{user.name}</h1>
            <div className="px-2">

                {login ? (
                    <button onClick={authenticateUser}>LogOut</button>
                ) : (
                    <button onClick={authenticateUser}>LogIn</button>
                )}
            </div>
        </div>
    )
}
export default Header