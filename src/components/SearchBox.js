import React from 'react';

const SearchBox = ({searchfiled, searchChange}) => {
    return (
        <div>
            <input
            className = 'tc pa2' 
            type = 'search' 
            style={{direction:'rtl'}}
            placeholder = 'חיפוש ח"כ' 
            onChange = {searchChange}
            />
        </div>
        

    );
}
export default SearchBox;