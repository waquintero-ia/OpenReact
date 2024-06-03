import { useState } from 'react'

const points = new Uint8Array(8)

const copy = {...points}

const Button = ({handleClic, text}) =>{

  return(
    <button onClick={handleClic}>
      {text}
    </button>
  )
}

const Votes = ({selected, votes}) =>{
  console.log('componente votes exitoso')
  console.log('points is...', votes[selected])
  console.log('selected item...', selected)
  return(
    <div>has {votes[selected]} votes</div>
  )
}

const Title = ({title}) => <h1>{title}</h1>

const App = () =>{

const [selected, setSelect] = useState(0)

const title = ['Anecdote of the day', 'Anecdote with most votes']

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
    let random = (Math.random()*(0.7)).toFixed(1)*10
    random === selected ? random = (Math.random()*(0.7)).toFixed(1)*10 : random
    console.log('random is...', random)
    setSelect(random)
  }

  const handleVote = () =>{
    console.log('clicked button vote...')
    console.log('select for vote is...', selected)
    copy[selected] += 1
    console.log(copy)
  }

  return(
    <>
      <Title title={title[0]}/>
      <div>{anecdotes[selected]}</div>
      <Votes selected={selected} votes={copy}/>
      <Button handleClic= {handleVote} text='vote' />
      <Button handleClic={handleNext} text='next anecdote'/>
      <Title title={title[1]}/>
    </>
  )
}

export default App
