import { useState } from 'react'



function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const title = ['give feedback', 'statics']
  const statistics = ['good','neutral', 'bad', 'all', 'average', 'positive']

  const handleClickGood = () => setGood(good + 1)

  const handleClickNeutral = () => setNeutral(neutral + 1)

  const handleClickBad = () => setBad(bad + 1)

  const Header = ({title}) => <h1>{title}</h1>

  const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  const Statistics = ({statistics, good, neutral, bad}) => {
    let all = good + neutral + bad
    let average = ((good - bad) / all) * 100
    let positive = (good / all) * 100
    if (good === 0 && neutral === 0 && bad === 0){
      return(
        <div>
          No feedback given
        </div>
      )
    }
    return(
      <>
      <p>{statistics[0]} {good}</p>
      <p>{statistics[1]} {neutral}</p>
      <p>{statistics[2]} {bad}</p>
      <p>{statistics[3]} {all}</p>
      <p>{statistics[4]} {average.toFixed(2)} %</p>
      <p>{statistics[5]} {positive.toFixed(2)} %</p>
      </>
    )
  }

  console.log(title[0])
  console.log(title[1])
  statistics.forEach (value => {console.log(value)})
  
  return (
    <>
      <Header title={title[0]} />
      <Button handleClick={handleClickGood} text= 'good' />
      <Button handleClick={handleClickNeutral} text= 'neutral' />
      <Button handleClick={handleClickBad} text= 'bad' />
      <Header title={title[1]} />
      <Statistics statistics={statistics} 
                good={good} 
                neutral={neutral}
                bad={bad}
      />

    </>
  )
}

export default App
