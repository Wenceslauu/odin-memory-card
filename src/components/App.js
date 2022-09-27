import React, { useEffect } from 'react'
import { useState } from 'react'
import uniqid from 'uniqid'

import Scoreboard from './Scoreboard'
import Card from './Card'

const App = () => {
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [characters, setCharacters] = useState([
        {
            name:'michael',
            id: uniqid()
        },
        {
            name: 'jim',
            id: uniqid()
        },
        {
            name:'dwight',
            id: uniqid()
        },
        {
            name: 'pam',
            id: uniqid()
        },
        {
            name:'meredith',
            id: uniqid()
        },
        {
            name: 'kevin',
            id: uniqid()
        },
        {
            name:'stanley',
            id: uniqid()
        },
        {
            name: 'ryan',
            id: uniqid()
        },
        {
            name:'phyllis',
            id: uniqid()
        },
        {
            name: 'oscar',
            id: uniqid()
        }
    ])
    const [memorized, setMemorized] = useState([])

    useEffect(() => {
        if (score > bestScore) {
            setBestScore(score)
        }
    }, [score])

    useEffect(() => {
        setCharacters((prevCharacters) => prevCharacters.sort(() => .5 - Math.random()))
    }, [score])

    const memorize = (name) => {
        if (memorized.includes(name)) {
            setScore(0)
            setMemorized([])
        } else {
            setScore((prevScore) => prevScore + 1)
            setMemorized((prevMemorized) => prevMemorized.concat(name))
        }
    }

    return (
        <div className='app'>    
            <header>
                <h1>The Office Memory Game</h1>
                <Scoreboard score={score} bestScore={bestScore} />
            </header>
            <main> 
                {characters.map((character) => {
                    return <Card key={character.id} charName={character.name} pickCard={memorize}/>
                })}
            </main>
        </div>

    )
}

export default App