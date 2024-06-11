import { useState } from 'react'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('add clicked...', event.target);
    console.log('el nuevo nombre es...', newName)
    console.log('el resultado del find es...', persons.find(person => person.name === 'Arto Hellas'))
    let validateName = persons.find(person => person.name === newName)
    console.log('la validacion del nombre es...',validateName);
    if(validateName === undefined){
      console.log('se puede proceder')
        const newObject = {
        id: persons.length + 1,
        name: newName,
        number: newNumber
      }
  
      setPersons(persons.concat(newObject))
      setNewName('')
      setNewNumber('')
    }
    else{
      console.log('no se puede proceder')
      alert(`${newName} is already added to phonebook`)
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const nuevoFiltro = newFilter
  console.log('el parametro para el nuevo filtro es...', newFilter)

  const personsToShow = nuevoFiltro === '' ?
                            persons :
                            persons.filter(persons => persons.name.toLowerCase().includes(nuevoFiltro.toLowerCase())).map(filteredName => filteredName)

  console.log(persons)
  console.log('personas filtradas...',personsToShow);

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with<input value={newFilter} onChange={handleFilterChange}/>
        </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/> 
        </div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        <div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{listStyleType:"none"}}>
        {personsToShow.map(persons => 
          <Persons key={persons.id} persons={persons} />
        )}
      </ul>
      
    </div>
  )
}

export default App
