import React from 'react';
import Card from "./Card";

import styles from './Cards.module.css'

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return <div className={styles.cards}>
      {/*no caer en la tentacion en usar (c, index) =>*/}
      {/*... key={index} --> no va a funcionar renderizado*/}
        {cities.map( c =>
        <Card
            key={c.name} //{index+city.name} una opcion de ultima
            min={c.main.temp_min}
            max={c.main.temp_max}
            name={c.name}
            img={c.weather[0].icon}
            onClose={() => alert(c.name)}
        />
      )}
    </div>
};
