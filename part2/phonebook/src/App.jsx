import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'

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
  const [message, setMessage] = useState(null)
  const [typeMessage, setTypeMessage] = useState(null)


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
          
          setMessage(`Added ${newObject.name}`)
          setTypeMessage('succesfull')
          
          setTimeout(() => {
            setMessage(null)
            setTypeMessage(null)
          }, 3000)
       })
       .catch(error => {
        setMessage(
          error.response.data.error
        )

        setTypeMessage('error')

        setTimeout(() => {
          setMessage(null)
          setTypeMessage(null)
        }, 5000)
        console.log('se genera el mensaje de error al crear una persona');
        //setPersons(persons.filter(n => n.id !== validateName.id))
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

        const newObjectUpdated = {
          name: newName,
          number: newNumber,
          id: validateName.id
        }
        
        console.log('proceder con la actualizacion del numero...')
        console.log('el id a cambiar es..',validateName.id);
        console.log(newObject);
        

        personService
        .update(validateName.id, newObject )
        .then(returnedPersonUpdate => {
          setPersons(persons.filter(person => person.id !== validateName.id).concat(newObjectUpdated))
          console.log('personas despues de la actualizacion...',persons.map(person => person))
          console.log('persona modificada...', persons.find(person => person.id === validateName.id))
          console.log('unificar persona modificada real...', persons.filter(person => person.id !== validateName.id).concat(newObjectUpdated))
          setNewName('')
          setNewNumber('')

          setMessage(`Modified ${newObject.name}`)
          setTypeMessage('succesfull')

          setTimeout(() => {
            setMessage(null)
            setTypeMessage(null)
          }, 5000)
        })
        .catch(error => {
          
          console.log(error.response.data.error)
          
          if( error.response.data.error === undefined ){
            setMessage(
              `the person '${newObject.name}' was already deleted from server`
            )

            console.log('personas despues del mensaje de error',persons.filter(n => n.id !== newObject.id));
            setPersons(persons.filter(n => n.id !== validateName.id))
            setNewName('')
            setNewNumber('')

          }else{
            setMessage(
              error.response.data.error
            )
            console.log('personas despues del error en el numero', persons.map(person => person))
            setNewName('')
            setNewNumber('')
          }
          

          setTypeMessage('error')

          setTimeout(() => {
            setMessage(null)
            setTypeMessage(null)
          }, 5000)
          
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
    .catch(error => {
      const personDeletedAlert = persons.find(person => person.id === id)
      setMessage(
        
        `the person '${personDeletedAlert.name}' was already deleted from server`
      )

      setTypeMessage('error')

      setTimeout(() => {
        setMessage(null)
        setTypeMessage(null)
      }, 5000)
      console.log('personas despues de la eliminacion', persons.filter(person => person.id !== id))
      setPersons(persons.filter(person => person.id !== id))
    })
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
      <Notification message={message} typeMessage={typeMessage}/>
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
