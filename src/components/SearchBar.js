import React from 'react';
import './searchbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SearchBar () {
    return (
      <div className="search-bar">
        <div class="hamburger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <form>
            <input type="text" placeholder="Координаты"/>
            <button><FontAwesomeIcon icon ="search" /></button>
            <button><FontAwesomeIcon icon ="times" /></button>
        </form>
      </div>
    );
  }
  
  export default SearchBar;