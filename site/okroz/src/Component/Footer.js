import React,{Component} from 'react'
import { Row,Col } from 'react-bootstrap';
import { Button, Form, FormControl, Nav, Navbar,Container,NavItem, NavbarBrand } from 'react-bootstrap'
import { AiOutlineCopyright} from 'react-icons/ai';
import { FaTelegram} from 'react-icons/fa';
import { FaViber} from 'react-icons/fa';
import { FaWhatsapp} from 'react-icons/fa';
export default class Footer extends Component{

    render(){
        return(
            <>
     
            <Navbar sticky="bottom"  bg="light"variant="light">
                    <Container >
                         <Navbar.Collapse id="responsive-navbar-nav">
                             <NavItem className="mr-auto footer">
Спортивно-оздоровчий комплекс Розсошанський <AiOutlineCopyright/> 2020-2021
                             </NavItem>
                            <Nav className="ml-auto">
                             <Nav.Link href={"tg://resolve?domain=@bot_user1"}><FaTelegram/></Nav.Link>
                            <Nav.Link href={"tg://resolve?domain=@bot_user1"}><FaViber /></Nav.Link>
                            <Nav.Link href={"tg://resolve?domain=@bot_user1"}><FaWhatsapp/></Nav.Link>
                            </Nav>
                    </Navbar.Collapse>
                    </Container>

                </Navbar>   
             
          
            </>
        )
    }
}
                   
               
               
             
           
               
            