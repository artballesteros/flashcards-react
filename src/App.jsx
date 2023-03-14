import React, { useState } from "react"

import Card from "./components/Card"
import cardData from "./data/CardData"
import Header from './components/Header'
import CardGuess from "./components/CardGuess"

import './App.css'
import './index.css'

const App = () => {
  const [i, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  const goBack = () => {
    setIndex(Math.max(i - 1, 0))
    setFlip(false);
  }

  const goForward = () => {
    setIndex(Math.min(i + 1, cardData.length - 1))
    setFlip(false)
  }

  const shuffleCards = () => {
    cardData.sort(() => Math.random() - 0.5);
    alert("Cards have been shuffled");
  }

  const flipCard = () => setFlip(!flip)

  return (
    <div className='App'>
      <Header />
      <Card clickHandler={flipCard} card={cardData[i]} flip={flip}/>
      <CardGuess card={cardData[i]} flip={flip}/>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
      <button onClick={shuffleCards}>Shuffle</button>
    </div>
  )
}

export default App
