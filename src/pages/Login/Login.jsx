import { useDispatch } from "react-redux";
import AuthForm from "../../components/AuthForm/AthForm";
import { toast } from "react-toastify";
import { loginThunk } from "../../redux/auth/operations";

const Login = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(loginThunk(values)).catch((error) =>
            toast.error("Password or email is incorrect!")
        );
    };
    const initialValues = {
        email: "",
        password: "",
    };

    return (
        <AuthForm
            title="Login"
            onSubmit={handleSubmit}
            initialValues={initialValues}
        />
    );
};
export default Login;