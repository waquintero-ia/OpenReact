import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = (props) => {
    console.log(props)
    console.log('componente header exitoso')  
    return (
      <h1>{props.course}</h1>
    )
  }

  const Content = (props) => {
    console.log('componente content exitoso')  
    return (
     <Part parts={parts}/>
    )
  }

  const Part = (props) => {
    const [first, ...rest] = parts
    console.log(props.parts[0].name)
    console.log('componente part exitoso')
    parts.forEach(value => {
      console.log(value)
    })
    return (
    <>
      <p>
          {props.parts[0].name} {props.parts[0].exercises}
        </p>  
        <p>
          {props.parts[1].name} {props.parts[1].exercises}
        </p>
        <p>
          {props.parts[2].name} {props.parts[2].exercises}
        </p>
      </> 
    )
  }

  const Total = (props) => {
    console.log('componente total exitoso')
    return (
      <p>
      Number of excercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    )
  }

  return(
    <>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </>
  )
}

export default App
