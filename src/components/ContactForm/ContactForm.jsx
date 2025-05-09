import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
    const dispatch = useDispatch();

    const addSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, `Field must be more then 3!`)
            .max(50, `Field must be less then 50!`)
            .required("Required!"),
        number: Yup.string()
            .min(3, "Field must be more then 3!")
            .max(50, "Field must be less then 50!")
            .required("Required!"),
    });

    const initialValues = {
        name: "",
        number: "",
    };

    const handleSubmit = (data, options) => {
        dispatch(addContact({ name: data.name, number: data.number }));
        options.resetForm();
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={addSchema}
        >
            <Form className={css.form_search}>
                <label className={css.label}>
                    Name
                    <Field className={css.field} type="text" name="name" />
                    <ErrorMessage className={css.error} component="span" name="name" />
                </label>
                <label className={css.label}>
                    Number
                    <Field className={css.field} type="number" name="number" />
                    <ErrorMessage className={css.error} component="span" name="number" />
                </label>
                <button className={css.btn} type="submit">
                    Add contact
                </button>
            </Form>
        </Formik>
    );
};

export default ContactForm;