import React, {useState} from "react";
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from "./components/Nav";
import {Route} from "react-router-dom";
import About from "./components/About";
import Ciudad from "./components/Ciudad";

const API_KEY = process.env.REACT_APP_API_KEY

function App() {
    const [cities, setCities] = useState([]);

    function handleAddCity(city) {
        setCities((prevCities) => {
            return [city, ...prevCities];
        });
    }

    function handleRemoveCity(cityId) {
        setCities((prevCities) => {
            return prevCities.filter(city => {
                return cityId !== city.id
            })
        });
    }

    function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`)
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
                handleAddCity(ciudad);
            } else {
                alert("ciudad no encontrada");
            }
        })
    }


    return (
        <div className="App">
            {/*la forma que mas optima funciona el nav este presente siempre en la SPA
            en todas las rutas */}
            <Route path='/' render={() => <Nav onSearch={onSearch}/>}/>
            <Route
                path='/'
                exact
                render={() => <Cards cities={cities} onRemove={handleRemoveCity}/>}
            />
            {/*<Route*/}
            {/*    path='/ciudad/:id'*/}
            {/*    exact*/}
            {/*    render={({match}) => {*/}
            {/*        const city = cities.find((city) => city.id === parseInt(match.params.id));*/}
            {/*        return city ? <Ciudad city={city} /> : <h1>404 | NOT FOUND</h1>*/}
            {/*    }}*/}
            {/*/>*/}
            <Route path='/ciudad/:id' component={Ciudad} />
            <Route path="/about" component={About} />
        </div>
    );
}

export default App;
