import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    state = {}
    
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackDropClick = e => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    }

    render() {
        return createPortal(
            <div className={styles.Overlay} onClick={this.handleBackDropClick}>
                <div className={styles.Modal}>                    
                    {this.props.children}
                </div>
            </div>, modalRoot
        );
    }
}

export default Modal;
