import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
//import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { fetchApiImages } from 'api';
import { Spinner } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    query: '',
    isLoading: false,
    page: 1,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const { query: currentQuery, page: currentPage } = this.state;
    const { query: prevQuery, page: prevPage } = prevState;

    if (prevQuery !== currentQuery || prevPage !== currentPage) {
      this.setState({ isLoading: true });
      fetchApiImages(currentQuery, currentPage)
        .then(images => {
          console.log(images);
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
          }));
        })
        .catch(error =>
          this.setState({ error: error.message, isLoading: false })
        )
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  handleFormSubmit = query => {
    this.setState({
      query,
      images: [],
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {this.state.isLoading && <Spinner />}
        {this.state.images.length > 0 && (
          <>
            <ImageGallery images={this.state.images} />
            <Button onClick={this.loadMore} />
          </>
        )}
      </>
    );
  }
}
