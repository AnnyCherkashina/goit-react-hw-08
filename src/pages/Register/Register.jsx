import { useDispatch } from "react-redux";
import AuthForm from "../../components/AuthForm/AthForm";
import { toast } from "react-toastify";
import { registerThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (values) => {
        dispatch(registerThunk(values))
            .unwrap()
            .then((data) => {
                toast.success(`Welcome,${data.user.name}!`);
                navigate("/");
            })
            .catch((error) => {
                toast.error("Something went wrong, please try again");
            });
    };
    const initialValues = {
        name: "",
        email: "",
        password: "",
    };
    return (
        <AuthForm
            title="Register"
            onSubmit={handleSubmit}
            initialValues={initialValues}
            type="register"
        />
    );
};
export default Register;