import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  const getPersons = () => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
        console.log(initialPersons);
      })
  }

  useEffect(getPersons, [])

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
        name: newName,
        number: newNumber
      }
      
      personService
        .create(newObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
    else{
      console.log('no se puede proceder')
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const newObject = {
          name: newName,
          number: newNumber
        }
        
        console.log('proceder con la actualizacion del numero...')
        console.log('el id a cambiar es..',validateName.id);
        console.log(newObject);
        

        personService
        .update(validateName.id, newObject )
        .then(returnedPersonUpdate => {
          setPersons(persons.map(person => person.id !== validateName.id ? person : returnedPersonUpdate))
          setNewName('')
          setNewNumber('')
        })
      }
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

const deletePerson = id => {
  console.log('effect delete')
  console.log('encontrando el id',persons.id);
  personService
    .deleteOne(id)
    .then(() => {
      const personDeleted = persons.find(person => person.id === id)
      alert(`Delete ${personDeleted.name} ?`)
      console.log('persona eliminada')
      const personsAfterDelete = persons.filter(person => person.id !== id)
      console.log('personas despues de la eliminacion',personsAfterDelete)
      setPersons(personsAfterDelete)
    })
}

const actualizarPerson = () =>{

  console.log('desea actualizar esta persona?');

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
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} 
                  newName={newName} 
                  handleNameChange={handleNameChange} 
                  newNumber={newNumber} 
                  handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(personsToShow => 
          <Persons 
          key={personsToShow.id} 
          personsToShow={personsToShow} 
          deletePerson={() => deletePerson(personsToShow.id)}
          />
        )}
      </ul>
    </div>
  )
}

export default App
