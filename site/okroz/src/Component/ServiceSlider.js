import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class ServiceSlider extends Component {
    render(){
        return(
            
            <Carousel >

                <Carousel.Item>
                    <img 
                    className=" w-100"   id="size"
                    src={this.props.photo1}
                    
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className=" w-100 "id="size"
                    src={this.props.photo2}
                    
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className=" w-100" id="size"
                    src={this.props.photo3}
                    
                    />
                    
                </Carousel.Item>
               
               </Carousel>
       )
           }
}