import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);

    if (!filteredContacts.length) {
        return "No contacts to show...";
    }
    return (
        <>
            <ul className={css.ul}>
                {filteredContacts.map((contact) => (
                    <Contact key={contact.id} contact={contact} />
                ))}
            </ul>
        </>
    );
};

export default ContactList;