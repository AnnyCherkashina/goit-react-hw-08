import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/Navbar";

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Layout;