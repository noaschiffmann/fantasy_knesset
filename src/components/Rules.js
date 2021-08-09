import { React } from 'react';
import { Card } from 'react-bootstrap';
import './Message.css';


const RulesOverlay = () => {
    return (
<div>
<head>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"/>
</head>
<div>
<Card className="text-center" style={{backgroundColor: "#F7F7F7", margin:-35}}>
  <Card.Header style={{backgroundColor: "#144569"}}>חוקי המשחק</Card.Header>
   <Card.Body>
    <Card.Title style={{fontSize: 17}}>מבנה הקבוצה</Card.Title>
    <Card.Text style={{fontSize: 13}}>מטרתך היא לבנות קבוצה של 6 ח"כים אשר תזכה <br />.אותך במירב הנקודות</Card.Text>
      <Card.Text style={{fontSize: 13}}>
      :על הקבוצה להיות מורכבת כך ש<br />
      א. ישנו ייצוג של שני המגדרים<br />
      ב. ישנו ייצוג של שתי מפלגות לכל הפחות</Card.Text>
      <Card.Text style={{fontSize: 13}}>.אחת לשבועיים ניתן לבצע החלפה של עד שני ח"כים</Card.Text>
      <Card.Title style={{fontSize: 17, margin:-5}}>!בהצלחה</Card.Title>
  </Card.Body> 
</Card>
</div>
</div>
    );
}

export default RulesOverlay;