import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY

/*la HW pedia enviar un obj city a este componente, que previamente manetenia en un estado, pero si renderizas
* la aplicacion se cae. Entonces vamos a modificar para que reciba un id por parametro. Si renderizas,
* la aplicacion va a buscar de nuevo esa ciudad por API*/
function Ciudad() {
    const {id} = useParams()
    const [city, setCity] = useState(undefined);
    useEffect(() => {
        // function onSearch(ciudad) {  esto lo saco, no lo necesito mas
            fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}&units=metric`)
                .then(r => r.json())
                .then((recurso) => {
                    if (recurso.main !== undefined) {
                        const ciudad = {
                            min: Math.round(recurso.main.temp_min),
                            max: Math.round(recurso.main.temp_max),
                            img: recurso.weather[0].icon,
                            id: recurso.id,
                            wind: recurso.wind.speed,
                            temp: recurso.main.temp,
                            name: recurso.name,
                            weather: recurso.weather[0].main,
                            clouds: recurso.clouds.all,
                            latitud: recurso.coord.lat,
                            longitud: recurso.coord.lon
                        };
                        setCity(ciudad);
                    } else {
                        setCity(null);
                    }
                })
        // }
    }, [id]);

    return ( <>
        {
            city === 'undefined' && <h1>Cargando...</h1>
        }
        {
            city === 'null' && <h1>Ciudad no encontrada.</h1>
        }
        {
            city && (
                <div className="ciudad">
                    <div className="container">
                        <h2>{city.name}</h2>
                        <div className="info">
                            <div>Temperatura: {city.temp} ºC</div>
                            <div>Clima: {city.weather}</div>
                            <div>Viento: {city.wind} km/h</div>
                            <div>Cantidad de nubes: {city.clouds}</div>
                            <div>Latitud: {city.latitud}º</div>
                            <div>Longitud: {city.longitud}º</div>
                        </div>
                    </div>
                </div>
            )
        }
    </>)
}

export default Ciudad;
