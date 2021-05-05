import React, { Component } from "react";
import { Route, NavLink, HashRouter } from 'react-router-dom';
import GroupTab from "./GroupTab";
import HomeTab from "./HomeTab";
import LeaguesTab from "./LeaguesTab";
import MeliaTab from "./MeliaTab";
import "./Main.css";

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
          <head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
            </head>
            <ul className='tc' style={{width: "93%", direction:"rtl", marginLeft: "150px"}} className="header">
              <table className='tc' style={{justifyContent: "space-around", paddingRight: "50px"}}>
              <tr className='tc'>
              <td className= 'tc' ><li style={{backgroundColor: "#C4C4C4", paddingBottom:"16px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px", borderRadius: "3px"}}><NavLink to ="/">עמוד הבית</NavLink></li></td>
              <td><li style={{backgroundColor:"#C4C4C4", paddingBottom:"16px", paddingTop: "15px", borderRadius: "3px"}}><NavLink to="/Group">הקבוצה שלי</NavLink></li></td>
              <td className='tc'><li className='tc' style={{backgroundColor:"#C4C4C4", paddingBottom:"16px", paddingLeft: "30px", paddingRight:"30px", paddingTop: "15px", borderRadius: "3px"}}><NavLink to="/Leagues" className='tc'>ליגות</NavLink></li></td>
              <td className='tc'><li className='tc' style={{backgroundColor:"#C4C4C4", paddingBottom:"16px", paddingLeft: "30px", paddingRight:"30px", paddingTop: "15px", borderRadius: "3px"}}><NavLink to="/Melia" className='tc'>מליאה</NavLink></li></td>
              <td><d style= {{fontSize: 48, color: "white", marginRight: "340px"}}>Fantasy knesset</d></td>
              </tr>
            </table>
            </ul>
            <div className="content">
                <Route exact path="/" component={HomeTab}/>
                <Route exact path="/GroupTab" component={GroupTab}/>
                <Route exact path="/Leagues" component={LeaguesTab}/>
                <Route exact path="/Melia" component={MeliaTab}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }

export default Main;