import React, { Component } from 'react';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import SearchApi from './components/Services/SearchApi';

import styles from './app.module.css'

class App extends Component {
  state = {
    search: null,
    gallery: [],
    page: 1,
    showModal: false,
    largeImg: '',
    loading: false,
    loaderStatus: 'init',
    error: null,
  }

   componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevState.search;
    const nextSearch = this.state.search;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    
    if (prevSearch !== nextSearch || prevPage !== nextPage) {
      this.setState({ loading: true });
      
      if (nextPage === 1 || prevSearch !== nextSearch) {
        this.setState({ gallery: [], page: 1 });
      }
        SearchApi(nextSearch,nextPage)
        .then(data => {
          console.log(data);
          if (nextPage !== 1) {
            this.setState(prevState => {
              const newData = [ ...prevState.gallery, ...data.hits ]
              return { gallery: newData};
            })
          }
          if (nextPage === 1) {
            this.setState({ gallery: data.hits });  
          }          
        })
        .catch(error => this.setState({error}))
        .finally(() => this.setState({ loading: false }));  
    }
     
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      }); 
  }

  toggleModal = (e) => {
    if (e) {
      console.log(e.target);
      this.setState({largeImg: e.target.lowsrc})
    }
    
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))

  }

  handleInputSubmit = (input) => {
    this.setState({ search: input, loaderStatus: 'init' });
  }

  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1, loaderStatus: 'loadMore' };
    })
  }

  render() {
    const { gallery, loading, loaderStatus, showModal } = this.state;

    return (
      <div className={styles.App}>

        <Searchbar inputSubmit={this.handleInputSubmit} />

        {loading && loaderStatus === 'init' && <Loader />}
        
        {gallery.length > 1 && <ImageGallery
          gallery = {gallery}
          loadMore = {this.handleLoadMore}
          showModal={this.toggleModal} />}
        
        {showModal && <Modal onClose={this.toggleModal}>
          <img src={this.state.largeImg} alt="" />
        </Modal>}
        
      </div>
    );    
  }
}

export default App;
