import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';


export default class Slider extends Component {
    render(){
        return(
        
            <Carousel >
                
                   <Carousel.Item>
                    <img 
                    className="d-block w-100" id="size"
                    src={this.props.photo1}
                    alt="Kort"
                    />
                    <Carousel.Caption>
                        {/* <h4>Корт для великого тенісу</h4> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img  
                    className="d-block w-100 "id="size"
                    src={this.props.photo2}
                    alt="Kort"
                    />
                    <Carousel.Caption>
                        {/* <h4>Волейбольна площадка</h4> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="d-block w-100" id="size"
                    src={this.props.photo3}
                    alt="Kort"
                    />
                    <Carousel.Caption>
                        {/* <h4>Озеро для риболовлі</h4> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="d-block w-100" id="size"
                    src={this.props.photo4}
                    alt="Kort"
                    />
                    <Carousel.Caption>
                        {/* <h4>Зона відпочинку</h4> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="d-block w-100" id="size"
                    src={this.props.photo5}
                    alt="Kort"
                    />
                    <Carousel.Caption>
                        {/* <h4>Парковка</h4> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="d-block w-100" id="size"
                    src={this.props.photo6}
                    alt="Kort"
                    />
                    <Carousel.Caption>
                        {/* <h4>Загальний вид</h4> */}
                    </Carousel.Caption>
                </Carousel.Item>
               
            </Carousel>
        )
           }
}