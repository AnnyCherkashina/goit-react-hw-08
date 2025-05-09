import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = ({ searchStr }) => {
    const dispatch = useDispatch();

    return (
        <div className={css.search}>
            <h2>Find contact by name</h2>
            <input
                className={css.input}
                value={searchStr}
                onChange={(e) => {
                    dispatch(changeFilter(e.target.value));
                }}
                type="text"
                placeholder="Enter contact name..."
            />
        </div>
    );
};

export default SearchBox;