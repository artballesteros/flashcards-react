import React from 'react'

const Card = ({clickHandler, card, flip}) => {
    return (
        <div className={`card ${flip ? "flip" : ""}`} onClick={clickHandler}>
            <div className='front'>
                <p>{card['question']}</p>
            </div>
            <div className='back'>
                <p>{card['answer']}</p>
            </div>
        </div>
    )
}

export default Card