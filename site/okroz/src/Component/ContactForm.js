import React,{Component} from 'react'
import {Form,Container,Button,Col,Row} from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import {Provider} from '../Context';
import AddUser from '../Component/AddUser';
import Actions from '../Actions/Actions';

export default class ContactForm extends Actions
{
   render(){
      const contextValue = {
         insertUser:this.insertUser
      }
        return(
          <Provider value={contextValue}>
            <Container className="text-center ">
            <a id={"f"}></a>
              <h2 className="text-center m-4">Напишіть нам <hr></hr></h2>
              <AddUser/>
           </Container>
          </Provider>
            
        )
    }
}