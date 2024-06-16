const Persons = ({personsToShow, deletePerson}) => {
    const label = 'delete'
    return(
    <li>{personsToShow.name} {personsToShow.number} <button onClick={deletePerson}>{label}</button>  
    </li>
    )
}

export default Persons