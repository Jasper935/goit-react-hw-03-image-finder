import PropTypes from 'prop-types';
import style from '../Button/Button.module.css';
export const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={style.Button}>
      Load more...
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
