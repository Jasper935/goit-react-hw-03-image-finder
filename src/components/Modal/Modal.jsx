import style from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';
export const Modal = ({ img, onClick }) => {
  return (
    <div
      name="overlay"
      className={style.Overlay}
      id={'Overlay'}
      onClick={onClick}
    >
      <div className={style.Modal} id={'Modal'}>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
