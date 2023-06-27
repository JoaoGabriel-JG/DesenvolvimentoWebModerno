import React from 'react'
import ReactDOM from 'react-dom'
import Pai from './components/Pai'
import Filho from './components/FIlho'

ReactDOM.render(
    <>
        <Pai nome="JG" sobrenome="Borges">
            <Filho nome="Pedro" />
            <Filho nome="Bolacha" />
            <Filho nome="Hiago" />
        </Pai>
    </>
, document.getElementById('root')
)