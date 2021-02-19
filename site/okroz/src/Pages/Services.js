import React,{Component} from 'react'
import { Button, Form, FormControl, Nav, Navbar,Container,NavItem, Col,Row,Tab } from 'react-bootstrap'
import {AppContext} from '../Context';
import ServiceSlider from '../Component/ServiceSlider';
import Kort from '../Photo/Kort.jpg';
import kort2 from '../Photo/kort2.jpg';
import kort3 from '../Photo/kort3.jpg';
import sayna from '../Photo/sayna.jpg';
import sayna2 from '../Photo/sayna2.jpg';
import sayna3 from '../Photo/sayna3.jpg';
import Vb from '../Photo/Vb.jpg';
import vb2 from '../Photo/vb2.jpg';
import vb3 from '../Photo/vb3.jpg';
import rest from '../Photo/rest.jpg';
import rest2 from '../Photo/rest2.jpg';
import rest3 from '../Photo/rest3.jpg';
import ShedulePrice from '../Component/ShedulePrice'
import Price from '../Component/Price'


export default class Services extends Component{
 
    render(){
        return(
          
         <div className="page">
              <br></br>
              
              <h2 className="text-center m-4 mt-5">Наші послуги  <hr></hr></h2>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first"  >
  <Row className="text-center" >
  <Col sm={4} ></Col>
  <Col sm={4} >
      <Nav variant="tabs" bg="dark" className="flex-column  ml-2 " >
        <Nav.Item >
          <Nav.Link eventKey="first">Критий корт</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Сауна</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Пляжний волейбол</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">Місце відпочинку</Nav.Link>
        </Nav.Item>
      </Nav>
      <br></br>
      </Col>
      
      <Col sm={4}></Col>
      </Row>
        
     <Row>
        <Col sm={1}></Col>
    <Col sm={10}>
      
      <Tab.Content  className=" mr-5 ml-5  text-center">
     <Tab.Pane eventKey="first" id="kortTab">
       <ServiceSlider photo1={Kort} photo2={kort2} photo3={kort3}/>
     <br></br>
            <p className="text-center p" > This has normally happened because the text characters have been converted to a bitmap image if a specific font is not available.
             Conversion to pdf is fairly straightforward within PowerPoint.
Select File from the ribbon</p>
<ShedulePrice cina1="300 грн/година"/>

<a href='contacts#f' > <Button  variant ="danger">Напишіть нам</Button></a>
</Tab.Pane>

        <Tab.Pane eventKey="second"  >
           <a id={"services"}></a>
         <ServiceSlider photo1={sayna} photo2={sayna2} photo3={sayna3} />
         <br></br>
      <p className="text-center p" >This has normally happened because the text characters have been converted to a bitmap image if a specific font is not available.
             Conversion to pdf is fairly straightforward within PowerPoint.
Select File from the ribbon</p>
<ShedulePrice cina1="300 грн/година"/>

<a href='contacts#f' > <Button  variant ="danger">Напишіть нам</Button></a>
</Tab.Pane>
        
 <Tab.Pane eventKey="third">
 <ServiceSlider photo1={Vb} photo2={vb2} photo3={vb3}/>
 <br></br>
         <p className="text-center p"> This has normally happened because the text characters have been converted to a bitmap image if a specific font is not available.
             Conversion to pdf is fairly straightforward within PowerPoint.
Select File from the ribbon</p>
<ShedulePrice cina1="300 грн/година"/>

<a href='contacts#f' > <Button  variant ="danger">Напишіть нам</Button></a>
</Tab.Pane>
<Tab.Pane eventKey="fourth">
 <ServiceSlider photo1={rest} photo2={rest2} photo3={rest3}/>
 <br></br>
         <p className="text-center p"> This has normally happened because the text characters have been converted to a bitmap image if a specific font is not available.
             Conversion to pdf is fairly straightforward within PowerPoint.
Select File from the ribbon</p>
<ShedulePrice cina1="300 грн/година"/>

<a href='contacts#f' > <Button  variant ="danger">Напишіть нам</Button></a>
</Tab.Pane>

<br></br>
</Tab.Content>
  </Col>
  <Col sm={1}></Col>
 
      </Row>
     </Tab.Container>

</div>
           )
        }
      } 


     