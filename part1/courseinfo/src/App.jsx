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


const Content = (props) => {
  console.log('componente content exitoso') 
  return (
   <Part parts={props.parts} />
  )
}

const Part = (props) => {
  console.log('componente part exitoso')
  console.log(props.parts)
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
  console.log(props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises)
  return (
    <>
      Number of excercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return(
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App
