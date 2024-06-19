import Languagues from "./Languages"

const CountriesDetail = ({countriesToShow}) => {
    console.log('aqui va el detalle de los paises...')
    console.log('nombre del pais..',countriesToShow.map(country => country.name.common))
    const lang = countriesToShow.map(country => Object.values(country.languages))
    console.log('los lenguajes son...', lang)
    console.log('la bandera es...',countriesToShow.flag)

    return(
            countriesToShow.map(country =>
                <div key={country.name}>
                    <h1 key={country.name.common}>{country.name.common}</h1>
                    <p> Capital: {country.capital}</p>
                    <p> Area: {country.area}</p>
                    <h2>Languagues</h2>
                    <ul>
                        {
                            lang[0].map((item) =>
                                <Languagues key={item} 
                                languages={item} />
                            )
                        }
                    </ul>
                    <img alt={country.flags.alt}
                            src={country.flags.png}
                            loading="eager"
                    />
                </div> 
                
            )
    )
}

export default CountriesDetail