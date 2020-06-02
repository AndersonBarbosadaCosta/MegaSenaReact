import React, { useState } from 'react'
import { geraAposta } from '../geraNumero'
import './NumeroAleatorio.css'

function renderLista(numero) {
  return numero.map(item => item < 10 ? <li>{'0'+ item}</li> : <li>{item}</li>
  )
}

export default props => {

  const [numeros, setNumeros] = useState(new Array(6).fill(0))
  const [qtde, setQtde] = useState(6)
 
  return (
    <div className="card">
      <h2>MEGA SENA</h2>
      <ul>{renderLista(geraAposta(qtde))}</ul>
      <label>Qtde de Números</label><input id='qtde' type="number"
                                           onChange={e => {
                                                      setQtde(+e.target.value)
                                                      geraAposta(+e.target.value)}
                                                    } 
                                           min={6}
                                           max={15} />
      <button className='from-control' onClick={_ => setNumeros(geraAposta(qtde))}>Gerar Aposta</button>
      
    </div>
  )
}