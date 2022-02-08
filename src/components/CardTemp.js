import React from "react";
import styles from './CardTemp.module.css'

export default function CardTemp({label, value}) {
    return (
        <div className={styles.cardTemp}>
            <label>{label}</label>
            <span>{value}</span>
        </div>
    )
}
