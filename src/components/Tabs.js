import React, { component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import background from './picture.png';
import './Tabs.css';
import styled from 'styled-components';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#c4ccdf',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: `url(${background})`,
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(2),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(2),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#144569',
    backgroundImage: `url(${background})`,
  },
}));

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {/* <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Tab 1" />
          <AntTab label="Tab 2" />
          <AntTab label="Tab 3" />
        </AntTabs>
        <Typography className={classes.padding} />
      </div> */}
      <div className={classes.demo2}>
      <header>FANTASY KNESSET</header>
        <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
          <StyledTab> <a href="/">Home</a></StyledTab>
          <StyledTab label="הקבוצה שלי" />
          <StyledTab label="ליגות" />
          {/* <MyLeaguesTab></MyLeaguesTab> */}
          <StyledTab label="מליאה" />
        </StyledTabs>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
}
