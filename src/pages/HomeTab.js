import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Hak from '../components/Hak';
import Overlay from 'react-overlay-component'; 
import Chart from "../components/LeaderBoard/Chart";
import green from "../important/Green Arrow.png";
import red from "../important/Red Arrow.png"
import HakProfilePage from './HakProfilePage';
import {makeStyles} from '@material-ui/core';
import '../components/overlay.css';


const HomeTab=()=> {
  
  function bestHaks(){
    return [0, 3, 2]
  }
  function upHaks(){
    return [2, 4]
  }
  function downHaks(){
    return [1, 3]
  }
  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => setOverlay(false);

  const configs = {
    animate: true,
  };

  const [id, setId] = useState(0);

  function handleClick(id){
    setOverlay(true);
    setId(id);
  }
    return (
      <Container>
      <div align="center" style={{backgroundColor:"#F7F7F7"}}>
          <Card className="mb-3" style={{height: "500px", width:"1160px", backgroundColor: "#F7F7F7", color: "#F7F7F7", marginTop: "-40px", marginLeft:"-33px"}}>
            <Card.Body style={{ color: "#F7F7F7", height: "400px", backgroundColor: "#F7F7F7"}}>
              <Row>
              <Col>
                <Card.Title className='tc' style={{color: "black", fontSize: "20px", marginRight: "25px"}}>
                    ליגה ארצית
                  </Card.Title>
                  <label style={{marginRight: -170, marginTop: "-220px", color: "black"}}><Chart /></label>
                </Col>
              <Col>
              <Card.Title className='tc' style={{color: "black", fontSize: "20px", marginLeft: "68px"}}>
                    ח"כים מובילים
                  </Card.Title>
                <div className='tr' style={{marginTop: '-220px', marginRight: '-26px'}}>
                {bestHaks().map((item) => 
                    <Button style={{backgroundColor: "transparent", borderColor: "transparent", borderRadius: "0px", marginBottom: "230px", paddingRight: "10px"}} onClick={() => handleClick(item)}>
                      <Hak id={item}  />
                    </Button>
                  )
                }
                </div>
                </Col>
                </Row>
            </Card.Body>
            <Button style={{fontFamily: "Varela Round", marginBottom: 100, marginLeft: "828px", width: "147px", fontSize: "14px"}}
                variant="contained" color="secondary" size="large" align="center">לרשימה המלאה
            </Button>
          </Card>
          <Card className="mb-3" style={{width: "1160px", height: "350px", color: "#F7F7F7", backgroundColor: "#F7F7F7", marginLeft:"-33px"}}>
                  <Card.Title className='tc' style={{color: "black", fontSize: "20px", paddingTop: "20px"}}>
                      שינויי השבוע
                  </Card.Title>
              <Row>
                  <Col>
                  <Card.Text style={{color: "black", fontSize: '18px', marginBottom: "200px", marginLeft: "-20px"}}>
                   <img src={red} alt="a"></img> במגמת ירידה 
                  </Card.Text>
                  </Col>
                  <Col>
                  <Card.Text style={{color: "black", fontSize: '18px', marginBottom: "350px", marginLeft: "25px"}}>
                  <img src={green} alt="a"></img> במגמת עלייה
                  </Card.Text>
                  </Col>
              </Row>
              <Row>
                <Col>
                  <div align='left' style={{marginLeft: "100px", marginTop: "-330px"}}>
                  {downHaks().map((item) => 
                      <Button style={{backgroundColor: "transparent", borderColor: "transparent", borderRadius: "0px"}} onClick={() => handleClick(item)}>
                        <Hak id={item}  />
                      </Button>
                    )
                  }
                  </div>
                  </Col>
                <Col>
                  <div align='right' style={{marginRight: "100px", marginTop: "-250px", marginTop: "-330px"}}>
                  {upHaks().map((item) => 
                      <Button style={{backgroundColor: "transparent", borderColor: "transparent", borderRadius: "0px"}} onClick={() => handleClick(item)}>
                        <Hak id={item}  />
                      </Button>
                    )
                  }
                  
                  <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                    <HakProfilePage id={id} />
                  </Overlay>
                  
                  </div>
                </Col>
              </Row>
          </Card>
        <Card className="mb-3" style={{ width:"1160px", height: "100px", color: "#F7F7F7", backgroundColor: "#F7F7F7", marginLeft:"-33px"}}>
          <Row style={{marginLeft: "20px"}}>
            <Col>
                <Button onClick={()=> window.open("https://www.ynet.co.il/home/0,7340,L-8,00.html")} className='tc' style={{backgroundColor: "transparent", borderColor: "transparent", borderRadius: "0px"}} ><Card.Img className='tc' style={{height:"73px", width: "100px", marginTop:"3px"}} src={"https://ynet-images1.yit.co.il/picserver5/wcm_upload/2020/08/06/Sy2vKnt11v/ynet320.png"}></Card.Img> </Button>
            </Col>
            <Col>
                <Button onClick={()=> window.open("https://shakuf.co.il/?gclid=CjwKCAjw7diEBhB-EiwAskVi13-yK3B-4vJ9VZcBi517EK_IrZzPmiy3I4c1Mu0eF7QjWmOZJ9N1cBoCDWYQAvD_BwE")} className='tc' style={{backgroundColor: "transparent", borderColor: "transparent", borderRadius: "0px"}} ><Card.Img className='tc' style={{height:"80px", width: "100px"}} src={"https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/1360453/1360453-1618206307322-d32e982cdfc61.jpg"}></Card.Img> </Button>
            </Col>
            <Col>
                <Button onClick={()=> window.open("https://www.betaknesset.com/")} className='tc' style={{backgroundColor: "transparent", borderColor: "transparent", borderRadius: "0px"}} ><Card.Img className='tc' style={{height:"80px", width: "100px"}} src={"https://ynet-images1.yit.co.il/picserver5/crop_images/2021/03/22/SyWmjaaBNu/SyWmjaaBNu_0_0_1600_885_0_x-large.jpg"}></Card.Img> </Button>
            </Col>
            <Col>
                <Button onClick={()=> window.open("https://main.knesset.gov.il/Pages/default.aspx")} className='tc' style={{backgroundColor: "transparent", borderColor: "transparent", borderRadius: "0px"}} ><Card.Img className='tc' style={{height:"80px", width: "100px"}} src={"https://main.knesset.gov.il/_layouts/15/1037/images/Custom/knessetLogo115.png"}></Card.Img> </Button>
            </Col>
            <Col>
                <Button onClick={()=> window.open("https://www.mako.co.il/news-politics?partner=NewsNavBar")} className='tc' style={{backgroundColor: "transparent", borderColor: "transparent", borderRadius: "0px"}} ><Card.Img className='tc' style={{height:"80px", width: "100px"}} src={"https://img.mako.co.il/2020/02/17/SHAREIMG.png"}></Card.Img> </Button>
            </Col>
            <Col>
                <Button onClick={()=> window.open("https://mishmar.org.il/")} className='tc' style={{backgroundColor: "transparent", borderColor: "transparent", borderRadius: "0px"}} ><Card.Img className='tc' style={{height:"80px", width: "120px"}} src={"https://mishmar.org.il/wp-content/uploads/2019/08/%D7%9C%D7%95%D7%92%D7%95-%D7%9E%D7%A9%D7%9E%D7%A8-%D7%A2%D7%9D-%D7%9B%D7%AA%D7%95%D7%9D-01-1000x274.png"}></Card.Img> </Button>
            </Col>
          </Row>
        </Card>
       
      </div>
      </Container>
    );
  }

 
export default HomeTab;