import React, { Component } from 'react'
import MySlider from '../MySlider/MySlider'

import fi from '../Assets/1.jpg';
import si from '../Assets/2.jpg';
import ti from '../Assets/3.jpg';

export default class About extends Component {
    render() {
        return (
            <div>
                <MySlider imagesMas={[
                   fi,
                   si,
                   ti
                ]}
                />
            </div>
        )
    }
}
