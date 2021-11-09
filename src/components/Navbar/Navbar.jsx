import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {

    const loginHandler = () => {
        // Login code
    };

    return (
        <nav className={classes.navbar}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <h1>Shop</h1>
            </Link>

            <div className={classes.right}>

                <ul className={classes.list}>
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                </ul>

                <span className={classes.cart}>CART: 0 $</span>

                <button className={classes.btn} onClick={loginHandler}>Login</button>
            </div>
        </nav>
    )
}

export default Navbar;