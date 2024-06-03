import { useState } from 'react'

const App = () =>{

const [selected, setSelect] = useState(0)

const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const handleNext = () =>{
    console.log('clicked button next...')
    const random = (Math.random()*(0.7)).toFixed(1)*10
    console.log('random is...', random)
    setSelect(random)
  }

  const Button = ({handleClic, text}) =>{

    return(
      <button onClick={handleClic}>
        {text}
      </button>
    )
  }


  return(
    <>
      <div>{anecdotes[selected]}</div>
      <Button handleClic={handleNext} text='next anecdote'/>
    </>
  )
}

export default App
