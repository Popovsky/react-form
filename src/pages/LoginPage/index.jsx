import React from 'react';
import styles from './LoginPage.module.scss';
import {LoginForm} from '../../forms';
import Navigation from '../../components/Navigation';

const LoginPage = () => {
    return (
        <>
            <Navigation page={LoginPage.name}/>
            <article className="pageWrapper">
                <h1 className={styles.title}>login to your account</h1>
                <LoginForm/>
            </article>
        </>
    );
};

export default LoginPage;