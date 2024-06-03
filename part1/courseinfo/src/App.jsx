import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    console.log('componente header exitoso')  
    return (
      <h1>{props.course}</h1>
    )
  }

  const Content = () => {
    console.log('componente content exitoso')  
    return (
    <>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </>  
    )
  }

  const Total = () => {
    console.log('componente total exitoso')
    return (
      <p>
      Number of excercises {exercises1 + exercises2 + exercises3}
      </p>
    )
  }

  return(
    <>
      <Header course={course} />
      <Content />
      <Total />
    </>
  )
}

export default App
