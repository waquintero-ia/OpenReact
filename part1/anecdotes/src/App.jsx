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

const Point = ({point}) => {
  return(
    <div>has {point} votes</div>
  )
}

const Votes = ({point}) =>{
  console.log('componente votes exitoso')
  return(
    <Point point={point}/>
  )
}

const Title = ({title}) => <h1>{title}</h1>

const TheMostAnecdote = ({maxItem, anecdotes, maxPoint}) =>{
  
  console.log('component the most active')
  //console.log('the higer point is...', max)
  return(
    <>
      <div>{anecdotes[maxItem]}</div>
      <Point point={maxPoint}/>
    </>
  )
}

const App = () =>{

const [selected, setSelect] = useState(0)
const [currentPoint, setCurrentPoint] = useState(0)
const [maxPoint, setMaxPoint] = useState(0)
const [maxItem, setMaxItem] = useState(0)

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
    setCurrentPoint(copy[random])
  }

  const handleVote = () =>{
    console.log('clicked button vote...')
    console.log('select for vote is...', selected)
    copy[selected] += 1
    console.log(copy)
    setCurrentPoint(copy[selected])
    let maxValue = 0
    let maxItem = 0
    Object.keys(copy).forEach((e) =>{
      console.log(e, ':', copy[e])
      if (copy[e] > maxValue){
        maxValue = copy[e]
        maxItem = e
      }
      console.log('max value is...', maxValue)
      console.log('current point...', copy[selected])
      console.log ('max item is...', maxItem)
      console.log ('current item is...', selected)
    })

    setMaxPoint(maxValue)
    setMaxItem(maxItem)
  }

  return(
    <>
      
      <Title title={title[0]}/>
      <div>{anecdotes[selected]}</div>
      <Votes point={currentPoint}/>
      <Button handleClic= {handleVote} text='vote'  />
      <Button handleClic={handleNext} text='next anecdote'/>
      <Title title={title[1]}/>
      <TheMostAnecdote maxItem={maxItem} anecdotes={anecdotes} maxPoint = {maxPoint}/>
    </>
  )
}

export default App
