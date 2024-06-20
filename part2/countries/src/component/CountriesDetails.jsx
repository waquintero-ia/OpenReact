import Languagues from "./Languages"
import { useState, useEffect } from 'react'
import weatherService from "../services/weather"



const CountriesDetail = ({countriesToShow}) => {

    const [ countryWeather, setCountryWeather ] = useState(null)

    console.log('aqui va el detalle de los paises...')
    console.log('aqui esta lo que se pasa de name', countriesToShow)
    console.log('lenguajes...',Object.values(countriesToShow.languages))
    const languages = Object.values(countriesToShow.languages)

    useEffect(() => {

        weatherService
        .getOne(countriesToShow.capital)
        .then(initialWeather => {
            setCountryWeather(initialWeather)
        })
    }, [])

    if(countryWeather === null){
        return null
      }

    console.log('weather country',countryWeather)
    console.log('temp weather country', countryWeather.main.temp)
    console.log('wind weather country', countryWeather.wind.speed)
    console.log('icon weather is...', countryWeather.weather[0].icon)  

    const temp = (countryWeather.main.temp - 273.15).toFixed(2)
 
    return(
                <div key={countriesToShow.name.common}>
                    <h1 key={countriesToShow.name.common}>{countriesToShow.name.common}</h1>
                    <p> Capital: {countriesToShow.capital}</p>
                    <p> Area: {countriesToShow.area}</p>
                    <h2>Languagues</h2>
                    <ul>
                        {
                            languages.map((item) =>
                                <Languagues key={item} 
                                languages={item} />
                            )
                        }
                    </ul>
                    <img alt={countriesToShow.flags.alt}
                            src={countriesToShow.flags.png}
                            loading="eager"
                    />

                    <h2>Weather in {countriesToShow.capital}</h2>
                    <p>temperature {temp} Celcius</p>
                    <img alt={`Weather in ${countriesToShow.capital}`}
                            src={`https://openweathermap.org/img/wn/${countryWeather.weather[0].icon}@2x.png`}
                            loading="eager"
                    />
                    <p>wind {countryWeather.wind.speed} m/s</p>
                </div> 
                
           // )
    )
}

export default CountriesDetail