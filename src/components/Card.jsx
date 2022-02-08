import React from 'react';
import CardTemp from "./CardTemp";
import PropTypes from 'prop-types';
import icon_09d from '../assets/09d.png'
import icon_03n from '../assets/03n.png'


import styles from './Card.module.css'
import {IoCloseCircleOutline} from "react-icons/io5";

export default function Card({max, min, name, img, onClose}) {
    // acá va tu código
    function handleOnclose() {
        if (typeof onClose === 'function') onClose();
    }

    return (
        <div className={styles.card}>
            <button className={styles.closeButton} onClick={handleOnclose}>
                <IoCloseCircleOutline/>
            </button>
            <span className={styles.cityName}>{name}</span>
            <CardTemp label='Min' value={min}/>
            <CardTemp label='Max' value={max}/>
            <WeatherIcon icon={img}/>
            {/*<img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt=""/>*/}
        </div>
    )
}

function WeatherIcon({icon}) {
    switch (icon) {
        case "03n": return <img src={icon_03n} alt='lluvia'/>
        default:
            return <img src={icon_09d} alt='lluvia'/>
    }
}

Card.propTypes = {
    max: PropTypes.number,
    min: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    onclose: PropTypes.func,
}
