import React,{Component} from 'react'
import ContactMap from '../Component/ContactMap';
import ContactForm from '../Component/ContactForm';
export default class Contacts extends Component {

    render(){
        return(
          <div className="page">
           <br></br>
           <br></br>
           <ContactForm/>
             <ContactMap/>
           </div>
        )
    }
}