import style from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }
  onClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.openModal(false);
    }
  };

  onKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.openModal(false);
    }
  };

  render() {
    const { img } = this.props;
    return (
      <div
        name="overlay"
        className={style.Overlay}
        id={'Overlay'}
        onClick={this.onClick}
      >
        <div className={style.Modal} id={'Modal'}>
          <img src={img} alt="img" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
