const CountriesList = ({message, handleShowCountry}) => {

    return <li>{message.name.common} <button onClick={handleShowCountry}>show</button></li>
}

export default CountriesList