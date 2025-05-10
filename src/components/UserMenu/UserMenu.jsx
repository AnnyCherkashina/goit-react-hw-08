import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleLogout = () => {
        dispatch(logoutThunk());
    };

    return (
        <div>
            <p>Welcome, {user.email}</p>
            <button type="button" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default UserMenu;
