import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';

import styles from './imageGallery.module.css';

const ImageGallery = ({ gallery, loadMore }) => (
    <>
        <ul className={styles.ImageGallery}>
            <ImageGalleryItem hits={gallery}/>
        </ul>
        <Button onClick={loadMore}/>
    </>
);

export default ImageGallery;

