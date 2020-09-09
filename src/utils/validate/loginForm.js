import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .matches(
            /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)^.{8,20}$/,
            'Your password must be at least 8 characters long, be of mixed case and also contain a digit. '
        )
        .required('Required'),
});

export default validationSchema;