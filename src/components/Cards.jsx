import React from 'react';
import Card from "./Card";

import styles from './Cards.module.css'

export default function Cards({cities, onRemove}) {
  // acá va tu código
  // tip, podés usar un map
  return <div className={styles.cards}>
      {/*no caer en la tentacion en usar (c, index) =>*/}
      {/*... key={index} --> no va a funcionar renderizado*/}
        {cities.map( city =>
        <Card
            key={city.id} //{index+city.name} una opcion de ultima
            id={city.id}
            min={city.min}
            max={city.max}
            name={city.name}
            img={city.img}
            onClose={() => onRemove(city.id)}
        />
      )}
    </div>
};
