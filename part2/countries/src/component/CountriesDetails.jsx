import Languagues from "./Languages"

const CountriesDetail = ({countriesToShow}) => {
    console.log('aqui va el detalle de los paises...')
    console.log('aqui esta lo que se pasa de name', countriesToShow)
    console.log('lenguajes...',Object.values(countriesToShow.languages))
    const languages = Object.values(countriesToShow.languages)
    //console.log('nombre del pais pasado por name', countriesToShow.map(country => Object.values(country.languages)))
    //console.log('nombre del pais..',countriesToShow.map(country => country.name.common))
    //const lang = countriesToShow.map(country => Object.values(country.languages))
    //console.log('los lenguajes son...', lang)
    //console.log('la bandera es...',countriesToShow.flag)

    return(
            //countriesToShow.map(country =>
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
                </div> 
                
           // )
    )
}

export default CountriesDetail