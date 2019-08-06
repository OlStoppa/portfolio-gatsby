import React, { useState, useEffect } from 'react'
import TextTransition from 'react-text-transition'

const MainText = () => {
    const text = ["web", "software", "fullstack"]
    const [active, setActive] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setActive(active => active === 2 ? active = 2 : active + 1)
        }, 4000)
        return () => {clearInterval(interval)}
    }, [])

    return (
        <h1>
            <TextTransition 
                text={text[active % text.length]}
            />
        </h1>
    )
}

export default MainText