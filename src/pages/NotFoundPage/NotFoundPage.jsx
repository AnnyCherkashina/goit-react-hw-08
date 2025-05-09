import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";
const NotFoundPage = () => {
    return (
        <div className={css.not_found}>
            <h1>Error 404!</h1>
            <p>
                The page you are looking for might have been removed, had its name
                changed or is temporarily unavailable.
            </p>
            <p>
                <Link to="/">return to HomePage</Link>
            </p>
            <p>Good luck.</p>
        </div>
    );
};
export default NotFoundPage;