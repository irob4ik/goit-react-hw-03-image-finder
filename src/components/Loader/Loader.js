import React from 'react';

import Spinner from "react-loader-spinner";

import styles from './loader.module.css';

const Loader = () => (
    <div className={styles.Spinner}>
        <Spinner
            type="Puff"
            color="#3f51b5"
            height={200}
            width={200}
            timeout={3000}
        />
    </div>
);

export default Loader;