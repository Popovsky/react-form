import React from 'react';
import styles from './Input.module.scss';
import PropTypes from 'prop-types';
import {ErrorMessage, Field} from 'formik';
import classNames from 'classnames';

const Input = props => {
    const {name, type, placeholder, itemData: {touched, errors}, ...rest} = props;
    return (
        <label className={styles.wrapper}>
            <Field className={classNames(styles.field, {
                [styles.error]: touched[name] && name in errors,
                [styles.valid]: touched[name] && !(name in errors),
            })} type={type} name={name} placeholder={placeholder} autoComplete="on" {...rest}/>
            <ErrorMessage className={styles.errorMessage} name={name} component="div"/>
        </label>
    );
};

Input.propTypes = {
    itemData: PropTypes.shape({
        touched: PropTypes.object,
        errors: PropTypes.object,
    }).isRequired,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
};

Input.defaultProps = {
    name: 'name',
    type: 'text',
    placeholder: '',
}

export default Input;