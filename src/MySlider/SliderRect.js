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
            if(props.number < props.pos)
                props.onClick(
                    props.imgs[props.pos],
                    "",
                    "b",
                    props.number
                )
            else
                props.onClick(
                    "",
                    props.imgs[props.pos],
                    "n",
                    props.number
                )
        }}> 
        </div>
    )
}
