import { useState } from 'react'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      id: 1,
      name: 'Arto Hellas'
    }
  ])

  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('add clicked...', event.target);

    const newObject = {
      id: persons.length + 1,
      name: newName
    }
    setPersons(persons.concat(newObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  console.log(persons)
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{listStyleType:"none"}}>
        {persons.map(persons => 
          <Persons key={persons.id} persons={persons} />
        )}
      </ul>
      
    </div>
  )
}

export default App
