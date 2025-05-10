import AuthForm from '../AuthForm/AthForm';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { registerThunk } from '../../redux/auth/operations';

const RegistrationForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(registerThunk(values)).catch(() =>
            toast.error('Something went wrong, please try again')
        );
    };

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    return (
        <AuthForm
            title="Register"
            onSubmit={handleSubmit}
            initialValues={initialValues}
        />
    );
};

export default RegistrationForm;
