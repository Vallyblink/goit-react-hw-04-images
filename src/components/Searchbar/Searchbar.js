import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {SearchForm,SearchFormButton, SearchFormInput, Searchbar} from './styledSearchBar'

export default function SearchBar( {onSearch}) {
  const [imageName, setImageName] = useState('');
 
 const handleInputChange = event => {
    setImageName( event.target.value);
  };

 const handleSubmit = event => {
    event.preventDefault();
    if (imageName.trim() === '') {
      toast.error('Ooooop it is nothing to search');
      return;
    }
    onSearch(imageName);
    setImageName( '' );
  };

    return (
      <Searchbar className="searchbar">
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit" className="button">
            <span>Search</span>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={imageName}
            onChange={handleInputChange}
          />
        </SearchForm>
      </Searchbar>
    );
  
}
