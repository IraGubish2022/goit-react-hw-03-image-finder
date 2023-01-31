import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './imageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
state = {
  showModal: false,
};

static propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

toggleModal = () => {
  this.setState(({ showModal }) => ({
    showModal: !showModal,
  }));
};

render() {

  const { id, webformatURL, largeImageURL, tags } = this.props;
  const { showModal } = this.state;

  return (
    <>
    <li key={id} className={styles.galleryItem} onClick={this.toggleModal}>
      <img 
      src={webformatURL} 
      alt={tags}
      width="400"
      />
    </li>
    {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={this.toggleModal}
          />
        )}
    </>
  );
};
}

  
export default ImageGalleryItem;
