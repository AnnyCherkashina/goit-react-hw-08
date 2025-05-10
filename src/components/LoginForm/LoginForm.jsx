import AuthForm from '../AuthForm/AthForm';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginThunk } from '../../redux/auth/operations';

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(loginThunk(values)).catch(() =>
            toast.error('Password or email is incorrect!')
        );
    };

    const initialValues = {
        email: '',
        password: '',
    };

    return (
        <AuthForm title="Login" onSubmit={handleSubmit} initialValues={initialValues} />
    );
};

export default LoginForm;
