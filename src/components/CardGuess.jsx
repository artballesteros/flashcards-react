import React from 'react';
import { useState } from 'react';

const CardGuess = ({card, flip}) => {
    const [guess, setGuess] = useState("");

    const checkGuess = (event) => {
        event.preventDefault();
        if (!flip) {
            if (guess === card.answer) {
                alert(guess + " is correct!");
            } else {
                alert(guess + " is incorrect!");
            }
        }
    };

    return (
        <div>
            <form onSubmit={checkGuess}>
                <label>
                    Guess the answer to this question: 
                    <input type='text' value={guess} onInput={e => setGuess(e.target.value)}></input>
                </label>
                <button type='submit'>Submit Guess!</button>
            </form>
        </div>
    );
};

export default CardGuess; 