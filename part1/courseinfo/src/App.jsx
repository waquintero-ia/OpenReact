import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Header = (props) => {
  console.log('componente header exitoso')
  console.log(props.course.name)  
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}


const Content = ({parts}) => {
  console.log('componente content exitoso') 
  return (
   <Part parts={parts} />
  )
}

const Part = ({parts}) => {
  console.log('componente part exitoso')
  console.log(parts)
  return (
    <>
    {parts.map(part =>
      <p key={part.id}> {part.name} {part.exercises}</p>
    )}
    </>
  )
}

const Total = ({total}) => {
  console.log('componente total exitoso')
  const inicial = 0
  let sum = total.map(part => part.exercises)
  console.log('la suma es...',sum);
  const totales = sum.reduce((s,p) => {
    console.log('what is happening...', s, p);
    return s + p
  })
 return ( 
    <>
      Number of excercises {totales}
    </>
  )
}

const App = () => {
const course = {
  id:1,
  name:'Half Stack application development',
  parts: [
  {
    name: 'Fundamentals of React',
    exercises: 10,
    id: 1
  },
  {
    name: 'Using props to pass data',
    exercises: 7,
    id: 2
  },
  {
    name: 'State of a component',
    exercises: 14,
    id: 3
  },
  {
    name: 'Redux',
    exercises: 11,
    id:4
  }

  ]
}
  return(
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </>
  )
}

export default App
