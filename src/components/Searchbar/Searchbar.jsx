import PropTypes from 'prop-types';
import { Component } from 'react';
import style from '../Searchbar/Searchbar.module.css';
export class Searchbar extends Component {
  render() {
    return (
      <header className={style.Searchbar}>
        <form onSubmit={this.props.onSubmit} className={style.SearchForm}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            value={this.props.value}
            className={style.SearchFormInput}
            onInput={this.props.onInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
};
