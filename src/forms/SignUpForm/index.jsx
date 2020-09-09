import React from 'react';
import {Form, Formik} from 'formik';
import styles from './SignUpForm.module.scss';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import {handleSubmit} from '../../utils/handle';
import {sighUpFVS} from '../../utils/validate';

const SignUpForm = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={sighUpFVS}
            onSubmit={handleSubmit}
        >
            {props => {
                const {isSubmitting} = props;
                return <Form className={styles.container}>
                    <Input name="firstName" type="text" placeholder="first name" itemData={props}/>
                    <Input name="lastName" type="text" placeholder="last name" itemData={props}/>
                    <Input name="displayName" type="text" placeholder="display name" itemData={props}/>
                    <Input name="email" type="email" placeholder="email" itemData={props}/>
                    <Input name="password" type="password" placeholder="password" itemData={props}/>
                    <Input name="confirmPassword" type="password" placeholder="confirm password" itemData={props}/>
                    <label className={styles.section}>
                        <Input name="role" type="radio" itemData={props} value="buyer"/>
                        <div className={styles.textWrapper}>
                            <h2 className={styles.title}>Join As a Buyer</h2>
                            <p className={styles.description}>I am looking for a Name, Logo or Tagline for my business, brand or product.</p>
                        </div>
                    </label>
                    <label className={styles.section}>
                        <Input name="role" type="radio" itemData={props} value="creative"/>
                        <div className={styles.textWrapper}>
                            <h2 className={styles.title}>Join As a Creative or Marketplace Seller</h2>
                            <p className={styles.description}>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</p>
                        </div>
                    </label>
                    <SubmitButton isDisabled={isSubmitting} inner="create an account"/>
                </Form>
            }}
        </Formik>
    );
};

export default SignUpForm;