import React from 'react';

export default function Card({max, min, name, img, onClose}) {
    // acá va tu código
    function handleOnclose() {
        if (typeof onClose === 'function') onClose();
    }
    return (
        <div>
            <button onClick={handleOnclose}>X</button>
            <span>{name}</span>
            <div>
                <span>Min</span>
                <span>{min}</span>
            </div>
            <div>
                <span>Max</span>
                <span>{max}</span>
            </div>
            <div>
                <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt=""/>
            </div>
        </div>
    )
};
