import React from 'react'
import './styleItem.css'

export default function SliderItem(props) {
    if(props.name == ("item" + props.pos))
        return (
            <img 
                src={props.it}
                className="sliderItem"
            />
        )
    else
        return null;
}
