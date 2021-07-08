import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Hak from '../components/Hak';
import Overlay from 'react-overlay-component'; 
import green from "../important/pictures/Green Arrow.png";
import red from "../important/pictures/Red Arrow.png";
import twitter from "../important/pictures/Twitter_bird.png";
import HakProfilePage from './HakProfilePage';
import '../components/overlay.css';
import './HomeTab.css';
import MyPie from "../components/MyPie";
import PropTypes from 'prop-types';
import HakTable from '../components/HakTable';
import TwitterApi from '../components/TwitterApi';
import data from '../important/data.json';
import { makeStyles } from '@material-ui/core/styles';
import LeaderBoard from '../components/LeaderBoard/Lead';
import current_user from '../important/current_user.json';

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height:"100%",
    width:"100%",
  },
  box: {
    borderRadius: 20,
    backgroundColor: "white",
    height:"100%",
    width:"90%",
    padding: 20,
    alignSelf: "center",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 10px",
  },
  headLines: {
    color: "black",
    fontSize:20, 
    fontWeight:"bold", 
    marginBottom:15,
    fontFamily: "Varela Round"
  }
}));

const HomeTab = (props) => {
  
  function bestHaks(){
    let tmp = Object.create(data)
    return tmp.sort((a, b) => (b.points.reduce((x,y)=> x+y)) - (a.points.reduce((x,y) => x+y))).slice(0,10).reverse();
  }

  function upHaks(){
    let tmp = Object.create(data)
    return tmp.sort((a, b) => (b.points[b.points.length-1] - b.points[b.points.length-2]) - 
                              (a.points[a.points.length-1] - a.points[a.points.length-2]))[0];
  }

  function downHaks(){
    let tmp = Object.create(data)
    return tmp.sort((a, b) => (b.points[b.points.length-1] - b.points[b.points.length-2]) - 
                              (a.points[a.points.length-1] - a.points[a.points.length-2])).reverse()[0];
  }

  function ScrollBox( children ) {
    return (
      <div className="scroll-box">
        <div className="scroll-box__wrapper">
          <div style={{direction:'rtl', width: "max-content"}} className="scroll-box__container" role="list">
            {children.map((item,i) => (
              <div className="scroll-box__item" role="listitem" key={`scroll-box-item-${i}`}>
                <div>
              { 
                <Button style={{backgroundColor: "transparent", borderColor: "transparent", borderRadius: "0px"}} onClick={() => handleClick(item.id)}>
                  <HakTable id={item.id}  />
                </Button>
            }  
            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
              <HakProfilePage id={id} />
            </Overlay>
            </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  ScrollBox.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  
  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => setOverlay(false);

  const configs = {
    animate: true,
  };

  const [id, setId] = useState(0);
  const styles = useStyles();

  function handleClick(id){
    setOverlay(true);
    setId(id);
  }

  function handleClickToMelia(){
    props.toMeliaa(4) 
    props.changeBottomBar(0)
  }

    return (
        <div className={styles.container}>
          <div align="center" className={styles.box} style={{marginBottom:10, marginTop:20}}>
                <h2 align="center" className={styles.headLines} style={{}}>
                    ח"כים מובילים
                </h2>
                <div style={{marginBottom:12}}>
                {ScrollBox(bestHaks())}
                </div>
                <Button variant="contained" color="secondary" onClick={handleClickToMelia}> לרשימה המלאה </Button>
          </div>
          <div className={styles.box} style={{marginBottom:10, marginTop:10}}>
              <h2 align="center" className={styles.headLines}>
                    ליגה ארצית
                    </h2>
                  <div align="center" style={{color: "black"}}><LeaderBoard Name={"להב רום"}/></div>
          </div>
          <div className={styles.box} style={{marginBottom:10, marginTop:10}}>
          <h2 align="center" className={styles.headLines}>שינויי השבוע</h2>
              <div className={styles.container} style={{flexDirection: "row"}}>
                  <div className={styles.container}>
                      <Card.Text style={{fontFamily:"Varela Round", color: "black", fontSize: 15, marginBottom:4}}>
                      <img src={red} alt="a"></img> במגמת ירידה 
                      </Card.Text>
                          <Button style={{backgroundColor: "transparent", borderColor: "transparent", borderRadius: "0px"}} onClick={() => handleClick(downHaks().id)}>
                            <Hak id={downHaks().id}  />
                          </Button>
                      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                        <HakProfilePage id={id} />
                      </Overlay>
                  </div>
                  <div className={styles.container}>
                    <Card.Text style={{fontFamily:"Varela Round", color: "black", fontSize: 15, marginBottom:4}}>
                     במגמת עלייה <img src={green} alt="a"></img>
                    </Card.Text>
                          <Button style={{backgroundColor: "transparent", borderColor: "transparent", borderRadius: "0px"}} onClick={() => handleClick(upHaks().id)}>
                            <Hak id={upHaks().id}  />
                          </Button>
                      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                        <HakProfilePage id={id} />
                      </Overlay>
                  </div>
                </div>
              </div>
          <div className={styles.box} style={{marginBottom:10, marginTop:10}}>
          <Col align="center">
            <MyPie></MyPie>
          </Col>
          </div>
          <div className={styles.box} style={{marginBottom:10, marginTop:10}}>
                  <Card.Title align="center" className={styles.headLines}>
                    <img src={twitter} alt="a"></img> ציוצים חמים 
                  </Card.Title>
                  <TwitterApi></TwitterApi>
          </div>
          <div className={styles.box} style={{margin:10, marginBottom: 20}}>
                <Row>
                  <Col>
                      <Button onClick={()=> window.open("https://www.ynet.co.il/home/0,7340,L-8,00.html")} className='tc' style={{backgroundColor: "transparent", borderColor: "transparent"}} ><Card.Img className='tc' style={{width: 60, height: 60, borderRadius: 120/2}} src={"https://www.nta.co.il/sites/default/files/ynet_0.png"}></Card.Img> </Button>
                      <Button onClick={()=> window.open("https://shakuf.co.il/?gclid=CjwKCAjw7diEBhB-EiwAskVi13-yK3B-4vJ9VZcBi517EK_IrZzPmiy3I4c1Mu0eF7QjWmOZJ9N1cBoCDWYQAvD_BwE")} className='tc' style={{backgroundColor: "transparent", borderColor: "transparent"}} ><Card.Img className='tc' style={{width: 60, height: 60, borderRadius: 120/2}} src={"https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/1360453/1360453-1618206307322-d32e982cdfc61.jpg"}></Card.Img> </Button>
                  </Col>
                  <Col>
                      <Button onClick={()=> window.open("https://www.betaknesset.com/")} className='tc' style={{backgroundColor: "transparent", borderColor: "transparent"}} ><Card.Img className='tc' style={{width: 60, height: 60, borderRadius: 120/2}} src={"https://ynet-images1.yit.co.il/picserver5/crop_images/2021/03/22/SyWmjaaBNu/SyWmjaaBNu_0_0_1600_885_0_x-large.jpg"}></Card.Img> </Button>
                      <Button onClick={()=> window.open("https://main.knesset.gov.il/Pages/default.aspx")} className='tc' style={{backgroundColor: "transparent", borderColor: "transparent"}} ><Card.Img className='tc' style={{width: 60, height: 60, borderRadius: 120/2}} src={"https://pbs.twimg.com/profile_images/1086861393708634112/aCxJCCFo.jpg"}></Card.Img> </Button>
                  </Col>
                  <Col>
                      <Button onClick={()=> window.open("https://www.mako.co.il/news-politics?partner=NewsNavBar")} className='tc' style={{backgroundColor: "transparent", borderColor: "transparent"}} ><Card.Img className='tc' style={{width: 60, height: 60, borderRadius: 120/2}} src={"https://img.mako.co.il/2020/02/17/SHAREIMG.png"}></Card.Img> </Button>
                      <Button onClick={()=> window.open("https://mishmar.org.il/")} className='tc' style={{backgroundColor: "transparent", borderColor: "transparent"}} ><Card.Img className='tc' style={{width: 60, height: 60, borderRadius: 120/2}} src={"https://masorti-kfarvradim.org.il/wp-content/uploads/2018/01/%D7%A2%D7%9C-%D7%9E%D7%A9%D7%9E%D7%A8-%D7%94%D7%9B%D7%A0%D7%A1%D7%AA.jpg"}></Card.Img> </Button>
                  </Col>
                </Row>
          </div> 
        </div>
    );
  }

 
export default HomeTab;