import PropTypes from 'prop-types';
import { Component } from 'react';
import style from '../Searchbar/Searchbar.module.css';
export class Searchbar extends Component {
  state = {
    search: '',
  };

  onSubmit = evt => {
    evt.preventDefault();
    this.props.getSearch(this.state.search);
    this.props.getFirstPage();
    this.setState({ search: '' });
  };

  onInput = evt => {
    this.setState({
      search: evt.currentTarget.value,
    });
  };

  render() {
    return (
      <header className={style.Searchbar}>
        <form onSubmit={this.onSubmit} className={style.SearchForm}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            name="search"
            value={this.state.search}
            className={style.SearchFormInput}
            onInput={this.onInput}
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
  getSearch: PropTypes.func.isRequired,
  getFirstPage: PropTypes.func.isRequired,
};
