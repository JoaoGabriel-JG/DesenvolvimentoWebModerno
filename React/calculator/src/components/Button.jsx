import React from 'react'
import './Button.css'

// Quanto mais componentes sem estado melhor
export default props => 
    <button className='button'> { props.label } </button>
