import React, {Component} from 'react';
import { Container, Col,Row } from 'react-bootstrap'



export default class ShedulePrice extends Component {
    render(){
        return(
            
     <Container className="schedule ">
            <h2 className="text-center m-4 mt-5">Графік роботи та ціни  <hr></hr></h2>
         <Row className="schedule text-center ">
             <Col sm={6}>
                Понеділок -  П'ятниця:
                <br></br>
                <br></br>
                9:00 - 21:00
                <br></br>
                <br></br>
                {this.props.cina1}
            </Col>
                
            <Col sm={6}>
                Суббота - Неділя:
                <br></br>
                <br></br>
                 10:00 - 21:00
                <br></br>
                <br></br>
                {this.props.cina1}
            </Col>
      </Row>
                <br></br>
           
  </Container>
            
        )
           }
}