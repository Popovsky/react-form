import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(1).max(64).required('Required'),
    lastName: Yup.string().min(1).max(64).required('Required'),
    displayName: Yup.string()
        .min(6)
        .max(16)
        .matches(/[^\d][\w]+/, 'Only letters and numbers')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .matches(
            /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)^.{8,20}$/,
            'Your password must be at least 8 characters long, be of mixed case and also contain a digit. '
        )
        .required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')])
        .required('Required'),
    role: Yup.string().oneOf(['buyer', 'creative']),
});

export default validationSchema;