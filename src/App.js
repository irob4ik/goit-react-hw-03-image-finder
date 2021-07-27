import React, { Component } from 'react';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import SearchApi from './components/Services/SearchApi';

import styles from './app.module.css'

class App extends Component {
  state = {
    search: null,
    gallery: [],
    page: 1,
    loading: false,
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
      console.log(prevPage, nextPage);

      setTimeout(() => {
        SearchApi(nextSearch,nextPage)
        .then(data => {
          // console.log(data);
          if (nextPage !== 1) {
            this.setState(prevState => {
              const newData = [ ...prevState.gallery, ...data.hits ]
              console.log(prevState.gallery);
              console.log(data.hits);
              console.log(newData);
              return { gallery: newData};
            })
          }

          if (nextPage === 1) {
            this.setState({ gallery: data.hits });  
          }          
        })
        .catch(error => this.setState({error}))
        .finally(() => this.setState({ loading: false }));
        
      }, 500);
      
      
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }    
  }

  handleInputSubmit = (input) => {
    this.setState({ search: input });
  }

  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    })
  }

  render() {
    const { gallery, loading } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar inputSubmit={this.handleInputSubmit} />
        {loading && <Loader />}
        {gallery.length > 1 && <ImageGallery gallery={gallery} loadMore={this.handleLoadMore}/>}
      </div>      
    );    
  }
}

export default App;
