import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './searchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { BiSearchAlt } from 'react-icons/bi';
import { IconContext } from 'react-icons';

export class SearchBar extends Component {
  state = {
    imageName: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  handleImageNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imageName.trim() === '') {
      toast(`Enter the name of the picture`);
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };
  render() {
    return (
      <header className={styles.searchBar}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.button}>
            <IconContext.Provider
              value={{
                color: 'blue',
                size: '3em',
                className: 'global-class-name',
              }}
            >
              <div>
                <BiSearchAlt />
              </div>
            </IconContext.Provider>
            ;<span className={styles.buttonLabel}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleImageNameChange}
          />
        </form>
        <Toaster position="top-right" />
      </header>
    );
  }
}
//export default SearchBar;
