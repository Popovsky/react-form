import React from 'react';
import styles from './SignUpPage.module.scss';
import {SignUpForm} from '../../forms';
import Navigation from '../../components/Navigation';

const SignUpPage = () => {
    return (
        <>
            <Navigation page={SignUpPage.name}/>
            <article className="pageWrapper">
                <h1 className={styles.title}>create an account</h1>
                <p className={styles.description}>We always keep your name and email address private.</p>
                <SignUpForm/>
            </article>
        </>
    );
};

export default SignUpPage;