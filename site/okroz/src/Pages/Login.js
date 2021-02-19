import React,{Component} from 'react'
import {Form,Container,Button,Col,Row} from 'react-bootstrap'
import Admin from '../Pages/Admin';
export default class Login extends Component{

    render(){
        return(
            <div className="page">
                <br></br>
                <br></br>
                <Container className="mt-5">
                <h2 className="text-center m-4">Вхід до сторінки адміністратора <hr></hr></h2>
            <Form className="text-center" >
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Login</Form.Label>
    <Form.Control type="text" name ="login" placeholder="Enter login" />
   </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name ="pass" placeholder="Password" />
  </Form.Group>
 
  <Button variant="danger" type="submit" >
    Увійти
  </Button>
</Form> 
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            

</Container>
              
            </div>
        )
    }
}