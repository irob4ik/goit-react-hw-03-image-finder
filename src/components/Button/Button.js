import React from 'react';

import styles from './button.module.css';

const Button = ({ onClick }) => (
    <button
        type="button"
        className={styles.Button}
        onClick={()=>onClick()}
    >Load more
    </button>
);

export default Button;