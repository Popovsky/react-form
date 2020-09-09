import React from 'react';
import styles from './LoginForm.module.scss';
import {Form, Formik} from 'formik';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import {handleSubmit} from '../../utils/handle';
import {loginFVS} from '../../utils/validate';

const LoginForm = () => {
    const initialValues = {
        email: '',
        password: '',
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginFVS}
            onSubmit={handleSubmit}
        >
            {props => {
                const {isSubmitting} = props;
                return <Form className={styles.container}>
                    <Input name="email" type="email" placeholder="email address" itemData={props}/>
                    <Input name="password" type="password" placeholder="password" itemData={props}/>
                    <SubmitButton isDisabled={isSubmitting} inner="login"/>
                </Form>
            }}
        </Formik>
    );
};

export default LoginForm;