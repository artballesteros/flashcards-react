import React, { useState } from "react"

import Card from "./components/Card"
import cardData from "./data/CardData"
import Header from './components/Header'

import './App.css'
import './index.css'

const App = () => {
  const [i, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);
  const newIndex = () => Math.floor(Math.random() * cardData.length)
  const size = cardData.length;

  const goBack = () => {
    let val = newIndex()
    let finalVal = val === i ? val + 1 : val
    finalVal = finalVal >= size ? 0 : finalVal
    setIndex(finalVal)
    setFlip(false)
  }

  const goForward = () => {
    let val = newIndex()
    let finalVal = val === i ? val + 1 : val
    finalVal = finalVal >= size ? 0 : finalVal
    setIndex(finalVal)
    setFlip(false)
  }

  const flipCard = () => setFlip(!flip)

  return (
    <div className='App'>
      <Header />
      <Card clickHandler={flipCard} card={cardData[i]} flip={flip}/>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </div>
  )
}

export default App
