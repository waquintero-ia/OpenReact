import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Header = ({course, index}) => {
  console.log('componente header exitoso')
  console.log(course[index].id)
  let titleCourse = course[index].name
  let idCourse = course[index].id 
  return (
    <>
      <h1 key={idCourse}>{titleCourse}</h1>
    </>
  )
}


const Content = ({parts, index}) => {
  console.log('componente content exitoso') 
  return (
   <Part parts={parts} index={index}/>
  )
}

const Part = ({parts, index}) => {
  console.log('componente part exitoso')
  console.log(parts[index].parts)
  let partsName = parts[index].parts
  console.log(partsName);
  /*console.log('que sucede con parts...',parts.map(part[0] => part.parts));*/
  return (
    <>
      {partsName.map(partsName => 
        <p key={partsName.id}>{partsName.name} {partsName.exercises}</p>
      )}
    </>
  )
}

const Total = ({total, index}) => {
  console.log('componente total exitoso')
  let partsExercises = total[index].parts
  console.log(partsExercises);
  let sum = partsExercises.map(partsExercises => partsExercises.exercises)
  console.log('la suma es...',sum);
  const totales = sum.reduce((s,p) => {
    console.log('what is happening...', s, p);
    return s + p
  })
 return ( 
    <>
      total of {totales} exercises
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return(
    <>
    <Header course={courses} index={0}/>
     <Content parts={courses} index={0}/>
      <Total total={courses} index={0}/>
      <Header course={courses} index={1}/>
     <Content parts={courses} index={1}/>
      <Total total={courses} index={1}/>
    </>
  )
}

export default App
