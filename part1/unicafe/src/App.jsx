import { useState } from 'react'



function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const title = ['give feedback', 'statics']
  const statics = ['good','neutral', 'bad']

  const handleClickGood = () => setGood(good + 1)

  const handleClickNeutral = () => setNeutral(neutral + 1)

  const handleClickBad = () => setBad(bad + 1)

  const Header = ({title}) => <h1>{title}</h1>

  const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  const Statics = ({statics, good, neutral, bad}) => {
    return(
      <>
      <p>{statics[0]} {good}</p>
      <p>{statics[1]} {neutral}</p>
      <p>{statics[2]} {bad}</p>
      </>
    )
  }

  console.log(title[0])
  console.log(title[1])
  statics.forEach (value => {console.log(value)})
  
  return (
    <>
      <Header title={title[0]} />
      <Button handleClick={handleClickGood} text= 'good' />
      <Button handleClick={handleClickNeutral} text= 'neutral' />
      <Button handleClick={handleClickBad} text= 'bad' />
      <Header title={title[1]} />
      <Statics statics={statics} 
                good={good} 
                neutral={neutral}
                bad={bad}
      />

    </>
  )
}

export default App