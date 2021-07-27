import React, { Component } from 'react';

import styles from './searchBar.module.css'

class Searchbar extends Component {
    state = {
        name: '',    
    }
    
    handleChange = (evt) => {
        const { value } = evt.currentTarget;
        this.setState({ name: value });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();

        if (this.state.name.trim() === "") {
            alert('Enter search request');
            return;
        }
        this.props.inputSubmit(this.state.name);
        
        this.reset();
    }

    reset = () => {
        this.setState({ name: '' });
    }

    render() {
        
        return (
            <header className={styles.Searchbar}>
                <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
                    <button type="submit" className={styles.SearchForm_button}>
                        <span className={styles.SearchForm_button_label}>Search</span>
                    </button>
                    
                    <input
                    className={styles.SearchForm_input}
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    required                    
                    />            
                </form>
            </header>  
        );
    }
}

export default Searchbar;
