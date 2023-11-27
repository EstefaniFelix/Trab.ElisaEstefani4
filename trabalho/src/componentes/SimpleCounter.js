import React, { useState } from 'react'
function SimpleCounter() {
    const [contador, setContador] = useState(0)
  
    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        setContador(contador - 1)
    }
    
    return (
        <div>
            <div className='Temperatura'>
            <p> Voce clicou {contador} vezes </p>

            <button onClick={incrementar}> Incrementar </button>
            <button onClick={decrementar}> Decrementar </button>
            </div>
        </div>
    )
}
export default SimpleCounter


