import React from 'react';

const styling = {
    backgroundColor: 'red',
    height: '10em',
    width: '10em',
    margin:'auto',
    textAlign:'center',
    padding:'20px'
}
styling.color = "yellow";

const Slider = () => {
    return (
        <div style={styling}>
            <p>Hello, Nisha!</p>
        </div>
    );
};

export default Slider;
