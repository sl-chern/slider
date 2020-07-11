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
            curPos: 0
        }
    }

    changeCurPos = (newState) => {
        this.setState({
            curPos: newState,
        });
    }

    render() {
        return (
            <div id="sliderContainer">
                {this.state.images.map((item, index) => (
                    <SliderItem name={"item" + index} pos={this.state.curPos} it={item}/>
                ))}

                <div className="nextButton">
                    <img src={next} alt="Next" onClick={() => {

                        if ((this.state.curPos + 2) > this.state.images.length) {
                            this.setState(state => ({curPos: 0}))
                        } else {
                            this.setState(state => ({
                                curPos: (this.state.curPos + 1)
                            }))
                        }

                    }}/>
                </div>

                <div className="backButton">
                    <img src={back} alt="Back" onClick={() => {

                        if ((this.state.curPos - 1) < 0) {
                            this.setState(state => ({curPos: this.state.images.length - 1}))
                        } else {
                            this.setState(state => ({
                                curPos: (this.state.curPos - 1)
                            }))
                        }

                    }}/>
                </div>
                
                
                <SliderButtons 
                    pos={this.state.curPos} 
                    imgs={this.state.images}
                    onClick={this.changeCurPos}
                />
            </div>
        )
    }
}
