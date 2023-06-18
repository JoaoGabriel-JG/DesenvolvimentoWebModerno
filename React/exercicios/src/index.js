import React from 'react'
import ReactDOM from 'react-dom'
import Multi, { BoaNoite } from './components/Multiplos'

ReactDOM.render(
    <>
        <Multi.BoaTarde nome='Isabella'/>
        <BoaNoite nome='João'/>
    </>, document.getElementById('root')
)