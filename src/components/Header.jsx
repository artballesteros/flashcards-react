import React from 'react'
import cardData from '../data/CardData'
import reactLogo from '../assets/react.svg'

const Header = () => {
    return (
        <div className='header'>
            <h2> Let's Learn React!</h2>
            <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <h4> 
                This deck of cards holds questions about React.js and their answers. 
                Good luck! :)
            </h4>
            <h5> Total number of cards: {cardData.length}</h5>
        </div>
    )
}

export default Header