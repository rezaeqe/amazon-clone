import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const Header = () => {

    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const handleAuthetication = () => {
        if (user) {
            auth.signOut();
            //navigate("/");
        }
    };

    return (
        <div className="header">

            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>

            <div className="header__search">
                <input className="headr__serachInput" type="text"></input>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>

            <div className="header__nav">
            <Link to={!user && "/login"}>
                <div onClick={handleAuthetication} className="header__option">
                        <span className="header__optionLineOne">Hello {!user ? "Guest" : user.email}</span>
                        <span className="header__optionLineTwo">{user ? "Sign Out":"Sign in"}</span>  
                </div>
            </Link>

                <div className="header__option">
                    <Link to="/orders">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </Link>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optionLineTwo header__basketCount">
                            {basket.length}
                        </span>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Header
