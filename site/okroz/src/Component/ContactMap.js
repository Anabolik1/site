import React,{Component} from 'react';

import {  Container,Row,Col } from 'react-bootstrap';

import { GrMail } from 'react-icons/gr';
import { HiLocationMarker } from 'react-icons/hi';
import { AiTwotonePhone} from 'react-icons/ai';

export default class ContactMap extends Component{

    render(){
        return(
           <>
           
<Container className="text-center " >
    <h2 className="text-center m-4">Наші Контакти</h2>
    <hr></hr>
<Row >

         <Col className="text-center m-4" >
         < HiLocationMarker />
             <h5 >Адреса</h5>
             <hr></hr>
             <p >Ок Розсошанський вул Квітнева 44</p>
             </Col>
             <Col className="text-center m-4">
             < GrMail />    
             <h5 > Пошта</h5>
             <hr></hr>
             <p >kiriiienko2016@gmail.com</p>
             </Col>
             <Col className="text-center m-4">
             < AiTwotonePhone />    
             <h5 >Телефон</h5>
             <hr></hr>
             <p >+380673652496</p>
             </Col>
             </Row>

           <br></br>


<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1298.9745027380309!2d26.948251042987867!3d49.37203785796869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDIyJzIwLjciTiAyNsKwNTYnNTQuNyJF!5e0!3m2!1suk!2sua!4v1611330747736!5m2!1suk!2sua" width="100%" height="300px" ></iframe>

</Container>

              
        </>
           
        )
    }
}