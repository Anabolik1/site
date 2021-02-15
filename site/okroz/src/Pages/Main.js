import React,{Component} from 'react';
import Slider from '../Component/Slider';
import Carousel from 'react-bootstrap/Carousel';
import { Card, CardDeck, Container,Button,Row,Col } from 'react-bootstrap';
import Kort from '../Photo/Kort.jpg';
import Vb from '../Photo/Vb.jpg';
import lake from '../Photo/lake.jpg';
import restzone from '../Photo/restzone.jpg';
import parking from '../Photo/parking.jpg';
import view from '../Photo/view.jpg';

import sayna from '../Photo/sayna.jpg';
import Cards from '../Component/Cards';
import ContactMap from '../Component/ContactMap';
export default class Main extends Component{

    render(){
        return(
           <div className="page">
           
           <Slider photo1={Kort} photo2={Vb} photo3={lake} photo4={restzone} photo5={parking} photo6={view} />
           <Cards/>
           <ContactMap/>
          
             
        </div>
           
        )
    }
}