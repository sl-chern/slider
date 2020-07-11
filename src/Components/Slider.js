import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import cityIMGfirst from '../Assets/1.jpg';
import cityIMGsecond from '../Assets/2.jpg';
import cityIMGthird from '../Assets/3.jpg';

export default class Slider extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            src={ cityIMGfirst }
                            alt="first image"
                        />
                        <Carousel.Caption>
                            <h3>cityIMGfirst</h3>
                            <p>Lorem sint amet anim sint non elit nostrud elit ea commodo in.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            src={ cityIMGsecond }
                            alt="second image"
                        />
                        <Carousel.Caption>
                            <h3>cityIMGsecond</h3>
                            <p>Lorem sint amet anim sint non elit nostrud elit ea commodo in.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            src={ cityIMGthird }
                            alt="third image"
                        />
                        <Carousel.Caption>
                            <h3>cityIMGthird</h3>
                            <p>Lorem sint amet anim sint non elit nostrud elit ea commodo in.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
