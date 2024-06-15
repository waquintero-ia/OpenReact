const Persons = ({personsToShow}) => {
    return(
    <ul style={{listStyleType:"none"}}>
        {personsToShow.map(person => <li key={person.id}>{person.name} {person.number}</li>)}
    </ul>
        
    )
}

export default Persons