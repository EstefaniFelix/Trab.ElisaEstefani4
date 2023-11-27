import React, { useState } from 'react'
function Votacao() {
    const [contador,setContador, ] = useState(0)
    const votob = () => {
        setContador(contador + 1)
    }
    const votom = () => {
        setContador(contador + 1)
    }
    const votor = () => {
        setContador(contador + 1)
    }
    return (
        <div>
            <div className='Temperatura'>
                <p> Bruna Tavares tem {contador} votos </p>  <button onClick={votob}> Bruna Tavares </button>
                <p>  Maria Maria tem {contador} votos </p>  <button onClick={votom}> Maria Maria </button>
                <p>  Rare  tem {contador} votos </p> <button onClick={votor}> Maria Maria </button>
           
            </div>
        </div>
    )
}
export default Votacao