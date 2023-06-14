import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {SearchForm,SearchFormButton, SearchFormInput, Searchbar} from './styledSearchBar'

export default class SearchBar extends Component {
  state = {
    imageName: '',
  };
  handleInputChange = event => {
    this.setState({ imageName: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imageName.trim() === '') {
      toast.error('Ooooop it is nothing to search');
      return;
    }
    this.props.onSearch(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <Searchbar className="searchbar">
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit" className="button">
            <span>Search</span>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </Searchbar>
    );
  }
}
