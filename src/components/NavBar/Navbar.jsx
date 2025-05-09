import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/slice";
import { logoutThunk } from "../../redux/auth/operations";

const NavBar = () => {
    const dispatch = useDispatch();

    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <div className={css.header}>
            <ul className={css.list}>
                <li>
                    <NavLink className={css.item} to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className={css.item} to="/contacts">
                        Contacts
                    </NavLink>
                </li>
            </ul>
            <p className={css.item}>{user.email}</p>
            {!isLoggedIn && (
                <>
                    <ul className={css.list}>
                        <li>
                            <NavLink className={css.item} to="/login">
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={css.item} to="/register">
                                Register
                            </NavLink>
                        </li>
                    </ul>
                </>
            )}

            {isLoggedIn && (
                <button onClick={() => dispatch(logoutThunk())} className={css.btn}>
                    Log out
                </button>
            )}
        </div>
    );
};

export default NavBar;