import React from 'react';

import styles from './button.module.css';

const Button = ({ onClick, btnName }) => (
    <button
        type="button"
        className={styles.Button}
        onClick={()=>onClick()}
    >{btnName}
    </button>
);

export default Button;