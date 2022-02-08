import React from 'react';
import CardTemp from "./CardTemp";
import PropTypes from 'prop-types';

export default function Card({max, min, name, img, onClose}) {
    // acá va tu código
    function handleOnclose() {
        if (typeof onClose === 'function') onClose();
    }

    return (
        <div>
            <button onClick={handleOnclose}>X</button>
            <span>{name}</span>
            <CardTemp label='Min' value={min}/>
            <CardTemp label='Max' value={max}/>
            <div>
                <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt=""/>
            </div>
        </div>
    )
}

Card.propTypes = {
    max: PropTypes.number,
    min: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    onclose: PropTypes.func,
}
