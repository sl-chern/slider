import React from 'react'
import './styleSliderRect.css'

export default function SliderRect(props) {
    let style;
    if(props.pos == props.number)
    {
        style = {
            opacity: "0.7",
        }
    }
    else
    {
        style = {}
    }
    return (
        <div className="sliderRect" style={style} onClick={() => {
            props.onClick(props.number)
        }}> 
        </div>
    )
}
