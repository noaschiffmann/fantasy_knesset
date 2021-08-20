/**
 * The alert that pops up as an overlay when you try to submit an illegal team
 */


import { React } from 'react';
import { Card } from 'react-bootstrap';
import './Message.css';


const NAteam = () => {
    return (
      <div>
        <head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
        </head>
        <div>
          <Card className="text-center" style={{backgroundColor: "#F7F7F7", margin:-35}}>
            <Card.Header style={{backgroundColor: "#144569"}}>!שים לב</Card.Header>
            <Card.Body>
              <Card.Title style={{fontSize: 17}}>הקבוצה איננה תקינה</Card.Title>
              <Card.Text style={{fontSize: 13}}>
                :על הקבוצה להיות מורכבת כך ש<br />
                א.ישנו ייצוג של שני המגדרים<br />
                ב. ישנו ייצוג של שתי מפלגות לכל הפחות
              </Card.Text>
              <Card.Text style={{fontSize: 13}}>.בעת החלפה ניתן להחלף עד שני ח"כים בלבד</Card.Text>
            </Card.Body> 
          </Card>
        </div>
      </div>
    );
}

export default NAteam;
