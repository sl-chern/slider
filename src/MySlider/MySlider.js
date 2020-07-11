import React, {Component} from 'react';
import './style.css';
import next from './Assets/next.png';
import back from './Assets/back.png';
import SliderItem from './SliderItem';
import SliderButtons from './SliderButtons';

export default class MySlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: this.props.imagesMas,
            curPos: 0,
            animation: "",
            nextImg: this.props.imagesMas[1],
            prevImg: this.props.imagesMas[this.props.imagesMas.length - 1],
        }
    }

    changeState = (ni, pi, anim, pos) => {
        this.setState({
            nextImg: ni,
            prevImg: pi,
            animation: anim,
            curPos: pos
        })
    }

    render() {
        return (
            <div id="sliderContainer">
                {this.state.images.map((item, index) => (
                    <SliderItem 
                        name={"item" + index} 
                        pos={this.state.curPos} 
                        it={item} 
                        imgs={this.state.images}
                        anim={this.state.animation}
                        prev={this.state.prevImg}
                        next={this.state.nextImg}
                    />
                ))}
                
                <div className="nextButton">
                    <img src={next} alt="Next" onClick={() => {

                        if ((this.state.curPos + 1) > this.state.images.length - 1) {
                            this.setState(state => ({
                                curPos: 0,
                                animation: "n",
                                nextImg: "",
                                prevImg: this.state.images[this.state.images.length - 1],

                            }))
                        } else {
                            this.setState(state => ({
                                curPos: (this.state.curPos + 1),
                                animation: "n",
                                nextImg: "",
                                prevImg: this.state.images[this.state.curPos],
                            }))
                        }

                    }}/>
                </div>

                <div className="backButton">
                    <img src={back} alt="Back" onClick={() => {
                        
                        if ((this.state.curPos - 1) < 0) {
                            this.setState(state => ({
                                curPos: this.state.images.length - 1,
                                animation: "b",
                                nextImg: this.state.images[0],
                                prevImg: ""
                            }))
                        } else {
                            this.setState({
                                nextImg: this.state.images[this.state.curPos],
                                prevImg: "",
                                curPos: (this.state.curPos - 1),
                                animation: "b",
                            })
                        }

                    }}/>
                </div>
                
                
                <SliderButtons 
                    pos={this.state.curPos} 
                    imgs={this.state.images}
                    onClick={this.changeState}
                />
            </div>
        )
    }
}
