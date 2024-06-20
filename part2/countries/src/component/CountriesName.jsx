import CountriesDetail from "./CountriesDetails"
import { useState } from 'react'
import TooMany from "./TooMany"
import CountriesList from "./CountriesList"

const CountriesName = ({message}) => {

    const [ viewDetailsCountry, setViewDetailsCountry ] = useState(false)
    const [ infoDetailsCountry, setInfoDetailsCountry ] = useState(null)

    console.log('aqui inicia countries name...')

    console.log('nombre del country', message)

    const handleShowCountry = () => {
        console.log('clicked botton show...')
        setViewDetailsCountry(true)
        setInfoDetailsCountry(message)
    }
    console.log('tamaño del pais a mostrar', infoDetailsCountry)
    console.log('boolean...',viewDetailsCountry)

    return(
    <div> 
        {
            viewDetailsCountry ?
                <CountriesDetail countriesToShow={infoDetailsCountry}/> :
                    message === 'Too many matches, specify another filter' ?
                        <TooMany message={message}/>:
                        <CountriesList message={message} handleShowCountry={handleShowCountry}/>
        }
    </div>
    
)

}

export default CountriesName