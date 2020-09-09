import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.scss';
import {Link} from 'react-router-dom';
import logo from '../../logo.png';

const pages = (page) => {
    switch (page) {
        case 'LoginPage':
            return <Link to="/signup">Sign up</Link>;
        case 'SignUpPage':
            return <Link to="/login">Login</Link>;
        default:
            return <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
            </>
    }
}

const Navigation = ({page}) => {
    return (
        <nav className={styles.wrapper}>
            <ul className={styles.container}>
                <li>
                    <Link to="/">
                        <img className={styles.logo} src={logo} alt="Home"/>
                    </Link>
                </li>
                <li className={styles.linksWrapper}>
                    {pages(page)}
                </li>
            </ul>
        </nav>
    );
};

Navigation.propTypes = {
    page: PropTypes.string,
}

Navigation.defaultProps = {
    page: 'HomePage',
};

export default Navigation;