import React from 'react'
import SliderRect from './SliderRect'
import './styleSliderButtons.css'

export default function SliderButtons(props) {
    let style = {
        left: (600 - 60 * props.imgs.length) / 2 + 5,
    }

    return (
        <div id="sliderButtons" style={style}>
            {props.imgs.map((item,index) => (
                <SliderRect pos={props.pos} number={index} onClick={props.onClick} imgs={props.imgs}/>
            ))}
        </div>
    )
}
