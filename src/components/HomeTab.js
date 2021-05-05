import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Alert, Breadcrumb, Card} from 'react-bootstrap';

class HomeTab extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Img />
            <Card.Body>
             <Card.Title>
                Card Example
             </Card.Title>
          <Card.Text>
            This is an Example
          </Card.Text>
          <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test2</Breadcrumb.Item>
          <Breadcrumb.Item active>Test3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">This is a button!</Alert>
        <Button>test button</Button>
      </div>
    );
  }
}
 
export default HomeTab;