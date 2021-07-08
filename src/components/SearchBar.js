import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import "./SearchBar.css";

const SearchBox = ({searchfiled, searchChange}) => {
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
  // const [partyField, setPartyField]= useState("");

  return (
    <div>
      <div>
        <FormControl className={classes.margin}>
        <SearchBox searchChange={props.searchChange}/>
        </FormControl>
      </div>
      <FormControl onClick={(e)=>props.setPartyField(e.target.value)} className={classes.formControl}>
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
      <FormControl onClick ={(e) =>props.setGenderField(e.target.value)} className={classes.formControl}>
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