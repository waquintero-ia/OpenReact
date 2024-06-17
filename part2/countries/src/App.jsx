import { useState, useEffect } from 'react'
import Filter from './component/Filter'
import countryService from './services/countries'
import CountriesName from './component/CountriesName'

function App() {

  const [ newFilter, setNewFilter ] = useState('')
  const [ countries, setCountries ] = useState(null)

  const tooManyCountries = 'Too many matches, specify another filter'
  
  const getCountries = () => {
    console.log('effect')
    
    countryService
      .getAll()
      .then(initialCountries => {
        console.log('promise fulfilled')
        setCountries(initialCountries)
      })
  }

  useEffect(getCountries, [])

  if(countries === null){
    return null
  }

  const handleFilterChange = (event) => {
    console.log('evento escribiendo...',event.target.value)
    setNewFilter(event.target.value)
    console.log('el nuevo filtro es...', newFilter)
  }

  console.log('se espera a que se obtengan los datos para poder manejarlos')
  console.log('datos obtenidos', countries)

  const nuevoFiltro = newFilter
  console.log('el parametro para el nuevo filtro es...', newFilter)

  const countriesToShow = nuevoFiltro === '' ?
                            countries.map(country => country) :
                            countries.filter(country => country.name.common.toLowerCase().includes(nuevoFiltro.toLowerCase())).map(filteredName => filteredName)
                          
  console.log('nombres a mostrar', countriesToShow);
  console.log('tamaño de datos a mostrar', countriesToShow.length)

  return (
    <>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      { 
        countriesToShow.length > 10 ?
          <CountriesName message={tooManyCountries}/> :
          countriesToShow.map(countriesToShow =>
            <CountriesName 
              key={countriesToShow.name.common}
              message={countriesToShow.name.common}
            />
          )
      }
    </>
  )
}

export default App
