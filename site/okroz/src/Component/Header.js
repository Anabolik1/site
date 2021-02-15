import React, {Component} from 'react'
import { Button, Form, FormControl, Nav, Navbar,Container,NavItem, NavbarBrand } from 'react-bootstrap'
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom"
import Main from '../Pages/Main';
import Services from '../Pages/Services';
import Partners from '../Pages/Partners';
import Contacts from '../Pages/Contacts';
import Admin from '../Pages/Admin';

import { FaPhoneAlt} from 'react-icons/fa';


export default class Header extends Component {
    render(){
        return (
            <>
               
                    <Navbar fixed="top" collapseOnSelect expand="lg"bg="light"variant="light">
                    <Container >
                        <Navbar.Brand  className=" mr-auto  ml-auto " href="/">
                           <h3> Okroz</h3>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                         <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto">
                            <Nav.Link href={"/"} className="header">Головна</Nav.Link>  
                            <Nav.Link href={"/services"} className="header">Послуги</Nav.Link>     
                            <Nav.Link href={"/contacts"} className="header">Контакти</Nav.Link>
                            <Nav.Link href={"/partners"}    className="header">Партнери</Nav.Link>
                            
                           </Nav>
                            <Nav.Item className=" m-2 " > 
                            <FaPhoneAlt /> +380673652496 </Nav.Item>
                          
                            <Nav.Link href={"/admin"}  className="header "> <button type="button" className="btn btn-danger " >Admin</button></Nav.Link>
                    </Navbar.Collapse>
                    </Container>

                </Navbar>   
                 <Router> 

                    <Switch>
                        <Route  exact path="/" component={Main} />
                        <Route  exact path="/services" component={Services} />
                        <Route  path="/contacts" component={Contacts} />
                        <Route  path="/partners" component={Partners} />
                        <Route  path="/admin" component={Admin} />
                      
                    </Switch>
                 </Router>
                    
            </>
            
        )
    }
}