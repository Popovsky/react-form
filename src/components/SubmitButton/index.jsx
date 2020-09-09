import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubmitButton.module.scss';

const SubmitButton = ({isDisabled, inner}) => (
    <button className={styles.submitBtn} type="submit" disabled={isDisabled}>
        {inner}
    </button>
);


SubmitButton.propTypes = {
    isDisabled: PropTypes.bool,
    inner: PropTypes.string,
};

SubmitButton.defaultProps = {
    isDisabled: false,
    inner: 'submit',
}

export default SubmitButton;