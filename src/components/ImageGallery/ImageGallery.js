import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';

import styles from './imageGallery.module.css';

const ImageGallery = ({ gallery, loadMore, showModal }) => (
    <>
        <ul className={styles.ImageGallery}>
            <ImageGalleryItem hits={gallery} onClick={showModal}/>
        </ul>
        <Button onClick={loadMore} btnName="Load more"/>
    </>
);

export default ImageGallery;

