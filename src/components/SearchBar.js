/**
 * The searches bar component that appears in the building the squad page and the Meliaa page
 */


import React from 'react';
import { makeStyles, InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';
import "./SearchBar.css";

const SearchBox = ({searchChange}) => {
    return (
        <div className = 'tc pa2'>
            <input
              className = 'tc pa2' 
              type = 'search'
              align="center"
              style={{direction: 'rtl', fontFamily: "Varela Round", height: 40}} 
              placeholder = 'חיפוש ח"כ' 
              onChange = {searchChange}
            />
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 90,
    
  },
}));


const SearchBar = (props) => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <FormControl className={classes.margin}>
        <SearchBox searchChange={props.searchChange}/>
        </FormControl>
      </div>
      <FormControl onClick={(e) => props.setPartyField(e.target.value)} className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">מפלגה</InputLabel>
        <Select defaultValue="" id="grouped-select">
            <MenuItem value="">כל המפלגות</MenuItem>
            <MenuItem value="הליכוד">הליכוד</MenuItem>
            <MenuItem value="יש עתיד">יש עתיד</MenuItem>
            <MenuItem value="העבודה">העבודה</MenuItem>
            <MenuItem value="המשותפת"> המשותפת</MenuItem>
            <MenuItem value="ימינה">ימינה</MenuItem>
            <MenuItem value="הציונות הדתית">הציונות הדתית</MenuItem>
            <MenuItem value="יהדות התורה">יהדות התורה</MenuItem>
            <MenuItem value="שס">שס</MenuItem>
            <MenuItem value="רעמ">רעמ</MenuItem>
            <MenuItem value="מרצ">מרצ</MenuItem>
            <MenuItem value="ישראל ביתנו">ישראל ביתנו</MenuItem>
            <MenuItem value="תקווה חדשה">תקווה חדשה</MenuItem>
            <MenuItem value="כחול לבן">כחול לבן</MenuItem>
        </Select>
      </FormControl>
      <FormControl onClick ={(e) => props.setGenderField(e.target.value)} className={classes.formControl}>
        <InputLabel style={{}} htmlFor="grouped-select">מגדר</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value="">שני המינים</MenuItem>
          <MenuItem value="F">נשים</MenuItem>
          <MenuItem value="M">גברים</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SearchBar;