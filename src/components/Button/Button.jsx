import PropTypes from 'prop-types';
import style from './button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button className={style.button} type="button" onClick={onClick}>
      Load more
    </button>
  );
};
Button.propTypes = { onClick: PropTypes.func };
