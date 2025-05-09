import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";
import { selectIsLoading } from "../../redux/contacts/contactsSlice";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

function Contacts() {
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            {isLoading && <h2>Loading...</h2>}
            <ContactList />
        </div>
    );
}
export default Contacts;