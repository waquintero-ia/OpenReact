import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const App = () => {
  const course = 'Half Stack application development'

  const part1= {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Header = (props) => {
    console.log(props)
    console.log('componente header exitoso')  
    return (
      <h1>{props.course}</h1>
    )
  }

  const Content = () => {
    console.log('componente content exitoso')  
    return (
     <Part />
    )
  }

  const Part = () => {
    console.log(part1.name)
    console.log('componente part exitoso')
    return (
      <>
      <p>
        {part1.name} {part1.exercises}
      </p>
      <p>
        {part2.name} {part2.exercises}
      </p>
      <p>
        {part3.name} {part3.exercises}
      </p>
    </> 
    )
  }

  const Total = () => {
    console.log('componente total exitoso')
    return (
      <p>
      Number of excercises {part1.exercises + part2.exercises + part3.exercises}
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
