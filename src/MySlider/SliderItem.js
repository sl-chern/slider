import React from 'react'
import './styleItem.css'

export default function SliderItem(props) {
    let style = {};

    if(props.anim == "n")
    {
        style={
            animation: "next 0.5s",
        }

    }

    if(props.anim == "b")
    {
        style={
            left: "auto",
            right: "0%",
            animation: "back 0.5s",
        }

    }

    if(props.name == ("item" + props.pos))
        return (
            <div id="sliderElements" style={style}>
                <img 
                    src={props.prev}
                    className="sliderItem"
                />
                <img 
                    src={props.it}
                    className="sliderItem"
                />
                <img 
                    src={props.next}
                    className="sliderItem"
                />
            </div>
        )
    else
        return null;
}
