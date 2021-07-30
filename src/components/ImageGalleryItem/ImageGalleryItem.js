import React, { Component } from 'react';

import styles from './imageGalleryItem.module.css';

class ImageGalleryItem extends Component {
    state = {    }

    render() {
        return (
            this.props.hits.map(({ id, tags, webformatURL, largeImageURL }) => (
                <li className={styles.ImageGalleryItem} key={id} >
                    <img
                        onClick={this.props.onClick}
                        src={webformatURL}
                        lowsrc={largeImageURL}
                        alt={tags}
                        className={styles.ImageGalleryItem_image} />
                </li>
            ))
        )
    }
}

export default ImageGalleryItem;
