import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';

const SearchBox = ({searchfiled, searchChange}) => {
    return (
        <div className = 'tc pa2'>
            <input
              className = 'tc pa2' 
              type = 'search'
              // align="center"
              style={{direction: 'rtl', fontFamily: "Varela Round", width:160, marginTop:-10, height:55}} 
              placeholder = 'חיפוש ח"כ' 
              onChange = {searchChange}
            />
        </div>
    );
}

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  options: {
    fontFamily: "Varela Round"
  }
}));

const SearchBar = ({searchfiled, searchChange}) => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.margin}>
      <SearchBox searchChange={searchChange}/>
        {/* <SearchBox searchChange={searchBarInput}/> */}
      </FormControl>
      <FormControl variant="outlined" className={classes.margin} style={{width:100,height:100}}>
        <InputLabel style={{fontFamily:"Varela Round"}} htmlFor="outlined-age-native-simple">מפלגה</InputLabel>
        <Select
          native
          value={age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option className={classes.options}>ליכוד</option>
          <option className={classes.options}>כחול לבן</option>
          <option className={classes.options}>העבודה</option>
          <option className={classes.options}>הרשימה המשותפת</option>
          <option className={classes.options}>מרצ</option>
          <option className={classes.options}>הציונות הדתית</option>
          <option className={classes.options}>יהדות התורה</option>
          <option className={classes.options}>ימינה</option>
          <option className={classes.options}>ישראל ביתנו</option>
          <option className={classes.options}>יש עתיד</option>
          <option className={classes.options}>ש"ס</option>
          <option className={classes.options}>תקווה חדשה</option>
          <option className={classes.options}>רע"מ</option>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.margin} style={{width:100,height:100}}>
        <InputLabel className={classes.options} htmlFor="outlined-age-native-simple">מגדר</InputLabel>
        <Select
          native
          value={age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option className={classes.options}>נשים</option>
          <option className={classes.options}>גברים</option>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.margin} style={{width:100,height:100}}>
        <InputLabel  className={classes.options} htmlFor="outlined-age-native-simple">סדר ע"פ</InputLabel>
        <Select
          native
          value={age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option className={classes.options}>א-ב</option>
          <option className={classes.options}>נקודות</option>
        </Select>
      </FormControl>
    </div>
  );
}

export default SearchBar;