import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
    return (
        <nav>
            <NavLink to="/register" style={{ marginRight: '10px' }}>Register</NavLink>
            <NavLink to="/login">Log In</NavLink>
        </nav>
    );
};
