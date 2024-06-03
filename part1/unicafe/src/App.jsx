import { useState } from 'react'



function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const title = ['give feedback', 'statics']
  
  const handleClickGood = () => setGood(good + 1)

  const handleClickNeutral = () => setNeutral(neutral + 1)

  const handleClickBad = () => setBad(bad + 1)

  const Header = ({title}) => <h1>{title}</h1>

  const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  const Statistics = ({good, neutral, bad}) => {
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
      <StatisticLine text='good' value={good}/>
      <StatisticLine text='neutral' value={neutral}/>
      <StatisticLine text='bad' value={bad}/>
      <StatisticLine text='all' value={all}/>
      <StatisticLine text='average' value={average.toFixed(2)}/>
      <StatisticLine text='positive' value={positive.toFixed(2)}/>
      </>
    )
  }

  const StatisticLine = ({text, value}) => {
    
    return(
      <>
      <p>{text} {value}</p>
      </>
    )
  }

  console.log(title[0])
  console.log(title[1])
  
  return (
    <>
      <Header title={title[0]} />
      <Button handleClick={handleClickGood} text= 'good' />
      <Button handleClick={handleClickNeutral} text= 'neutral' />
      <Button handleClick={handleClickBad} text= 'bad' />
      <Header title={title[1]} />
      <Statistics good={good} 
                    neutral={neutral}
                    bad={bad}
      />

    </>
  )
}

export default App
