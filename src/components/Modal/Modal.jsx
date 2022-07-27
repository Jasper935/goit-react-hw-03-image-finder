import style from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
export class Modal extends Component {
  state = {
    modalIsOpen: false,
    imgForModal: '',
  };
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }
  onClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.getModalStatus(this.state.modalIsOpen);
    }
  };

  onKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.getModalStatus(this.state.modalIsOpen);
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
  getModalStatus: PropTypes.func.isRequired,
};
