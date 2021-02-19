import React,{Component} from 'react'
import { Card, CardDeck, Container,Button,Row,Col } from 'react-bootstrap';
import Kort from '../Photo/Kort.jpg';
import Rest from '../Photo/restzone.jpg';

import Vb from '../Photo/Vb.jpg';
import sayna from '../Photo/sayna.jpg';
export default class Cards extends Component{

    render(){
        return(
            <Container>
              <h2 className="text-center m-4"  >Про нас <hr></hr></h2>
              <Row>
                  <Col>
              <p className="text-center" >Я проснулся серым утром. Комната была залита ровным жёлтым светом, будто от керосиновой лампы. Свет шёл снизу, из окна, и ярче всего освещал бревенчатый потолок.</p>
</Col>
<Col>
              <p className="text-center">Я проснулся серым утром. Комната была залита ровным жёлтым светом, будто от керосиновой лампы. Свет шёл снизу, из окна, и ярче всего освещал бревенчатый потолок.</p>
</Col>
<Col>
              <p className="text-center">Я проснулся серым утром. Комната была залита ровным жёлтым светом, будто от керосиновой лампы. Свет шёл снизу, из окна, и ярче всего освещал бревенчатый потолок.</p>
</Col>

</Row>
<br></br>
<br></br>


              <CardDeck >
                  <Col sm={6}>
                  <Card >
                      <Card.Img variant="top" src={Kort}/>
                      <Card.Body>
                          <Card.Title className="text-center">Критий Корт  </Card.Title>
                         
                              <Card.Text>
                                 <p> hello its my web site nice to meet you lets go folow me and improve yiurself web developing its eazy</p>
                                </Card.Text>
                                <a href='services#services' > <Button  variant ="outline-danger">Детальніше</Button></a>
                         
                      </Card.Body>
                  </Card>
                  <br></br>
                  <Card>
                      <Card.Img variant="top" src={sayna}/>
                      <Card.Body>
                          <Card.Title className="text-center">Сауна </Card.Title>
                              <Card.Text>
                              <p>   hello its my web site nice to meet you lets go folow me and improve yiurself web developing its eazy </p>
                                 
                
                              </Card.Text>
                              <a href='services#services' > <Button  variant ="outline-danger">Детальніше</Button></a>
                         
                      </Card.Body>
                      
                  </Card>
                  
                  </Col>
                  <Col sm={6}>
                  <Card>
                      <Card.Img variant="top" src={Vb}/>
                      <Card.Body>
                          <Card.Title className="text-center ">Пляжний волейбол</Card.Title>
                              <Card.Text>
                                <p>  hello its my web site nice to meet you lets go folow me and improve yiurself web developing its eazy </p>
                                  
                
                              </Card.Text>
                              <a href='services#services' > <Button  variant ="outline-danger">Детальніше</Button></a>
                      
                      </Card.Body>
                      
                  </Card>
                  <br></br>
                  <Card>
                      <Card.Img variant="top" src={Rest}/>
                      <Card.Body>
                          <Card.Title className="text-center ">Місце відпочинку</Card.Title>
                              <Card.Text>
                                <p>  hello its my web site nice to meet you lets go folow me and improve yiurself web developing its eazy </p>
                                  
                
                              </Card.Text>
                              <a href='services#services' > <Button  variant ="outline-danger">Детальніше</Button></a>
                      
                      </Card.Body>
                      
                  </Card>
                  </Col>
                  
              </CardDeck>
              
              </Container>
           
        )
    }
}