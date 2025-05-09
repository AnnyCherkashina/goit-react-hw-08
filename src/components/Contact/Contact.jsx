import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
    const dispatch = useDispatch();
    const { id, name, number } = contact;

    return (
        <li className={css.item}>
            <h2> {name}</h2>
            <p>{number}</p>
            <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
                Delete
            </button>
        </li>
    );
};

export default Contact;