import { Formik, Form, Field } from "formik";
import css from "./AuthForm.module.css";
import { Link } from "react-router-dom";

const AuthForm = ({ title, onSubmit, initialValues, type }) => {
    return (
        <div>
            <Formik onSubmit={onSubmit} initialValues={initialValues}>
                <Form className={css.form}>
                    <h1 className={css.title}>{title}</h1>
                    {type === "register" && (
                        <Field
                            className={css.input}
                            type="text"
                            name="name"
                            placeholder="Name"
                        />
                    )}

                    <Field
                        className={css.input}
                        type="text"
                        name="email"
                        placeholder="Email"
                    />
                    <Field
                        className={css.input}
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <button type="submit" className={css.btn}>
                        {title}
                    </button>
                    <p className={css.text}>
                        You
                        {type === "register"
                            ? "already have an account?"
                            : "don't have an account?"}
                        <Link to={type === "register" ? "/login" : "/register"}>
                            {type === "register" ? "Login" : "Register"}
                        </Link>
                    </p>
                </Form>
            </Formik>
        </div>
    );
};
export default AuthForm;