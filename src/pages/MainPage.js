import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React, { Component } from "react";
import FantasyHeader from '../components/FantasyHeader';
import HakProfilePage from './HakProfilePage';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'


class MainPage extends Component {
    render() {
      return (
          <div>
            <FantasyHeader></FantasyHeader>            
          </div>
      );
    }
  }
  export default MainPage;