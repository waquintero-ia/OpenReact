import CountriesDetail from "./CountriesDetails"
import CountriesName from "./CountriesName"

const Display = ({countriesToShow, tooManyCountries}) => {
    return(
    <div>
        { 
            countriesToShow.length === 1 ? 
              <CountriesDetail countriesToShow={countriesToShow}/> :
                countriesToShow.length > 10 ?
                  <CountriesName message={tooManyCountries}/> :
                  countriesToShow.map(countriesToShow =>
                    <CountriesName 
                      key={countriesToShow.name.common}
                      message={countriesToShow.name.common}
                    />
                  )
          }
    </div>
        
    )
}

export default Display