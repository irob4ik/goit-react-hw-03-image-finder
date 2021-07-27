import React from 'react';

import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ hits }) => {
    return (
        hits.map(({id, tags, webformatURL}) => (
            <li className={styles.ImageGalleryItem} key={id}>
                <img src={webformatURL} alt={tags} className={styles.ImageGalleryItem_image} />
            </li>    
        ))

        
    );
}

export default ImageGalleryItem;