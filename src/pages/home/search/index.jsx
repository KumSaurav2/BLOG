import React from 'react';
import './styles.css';

const SearchBar = (props) => {
    return (
        <div className='searchBar-wrap'>
            <form onSubmit={props.formSubmit}>
                <input
                    onChange={props.handleSearchKey}
                    type='text'
                    placeholder='Search'
                    value={props.value}
                />
                <span onClick={props.clearSearch}>X</span>
                <button type='submit'>Go</button>
            </form>
        </div>
    )
}

export default SearchBar;