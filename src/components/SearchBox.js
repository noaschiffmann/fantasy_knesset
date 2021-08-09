import React from 'react';

const SearchBox = ({searchfiled, searchChange}) => {
    return (
        <div className = 'tc pa2'>
            <input
              className = 'tc pa2' 
              type = 'search'
              align="center"
              style={{direction: 'rtl', fontFamily: "Varela Round", height: 40, marginTop: "5%"}} 
              placeholder = 'חיפוש ח"כ' 
              onChange = {searchChange}
            />
        </div>
    );
}
export default SearchBox;