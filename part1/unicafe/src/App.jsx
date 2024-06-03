import { useState } from 'react'



function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const title = ['give feedback', 'statics']

  const Header = ({title}) => <h1>{title}</h1>
  console.log('firts title is...', title[0])
  console.log('second title is...', title[1])

  const handleClickGood = () => {
    console.log('button good is clicked')
  }

  const handleClickNeutral = () => {
    console.log('button neutral is clicked')
  }

  const handleClickBad = () => {
    console.log('button bad is clicked')
  }

  const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  return (
    <>
      <Header title={title[0]}/>
      <Button handleClick={handleClickGood} text= 'good' />
      <Button handleClick={handleClickNeutral} text= 'neutral' />
      <Button handleClick={handleClickBad} text= 'bad' />
      <Header title={title[1]}/>

    </>
  )
}

export default App
