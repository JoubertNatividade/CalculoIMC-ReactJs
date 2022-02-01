import React, { useState } from 'react';
import './styles/index.css';

function App() {

  const [peso, setPeso] = useState('')
  const [alt, setAlt] = useState('')

  const [message, setMessege] = useState('')


  function calcImc() {
    const altura = alt / 100
    const calc = peso / (altura * altura)

    const imc = calc.toFixed(2)

    if (imc < 18.6) {
      setMessege('Você está abaixo do peso. Seu IMC é: ' + imc)
    } else if (imc >= 18.6 && imc < 24.9) {
      setMessege('Peso ideal. Seu IMC é: ' + imc)
    } else if (imc >= 24.9 && imc < 34.9) {
      setMessege('Você está levimento acima do peso. Seu IMC é: ' + imc)
    } else if (imc >= 34.9) (
      setMessege('Cuidado! Obesidade. Seu IMC é: ' + imc)
    )
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>
        Opa, é um prazer te ter aqui. Vamos calcular seu IMC ?
      </span>

      <div className="field">
        <input
          type="number"
          min={20}
          placeholder="Peso em kg. Sem ponto ou vírgula."
          value={peso}
          onChange={(e) => setPeso(e.target.value)}

        />
        <input
          type="number"
          min={20}
          placeholder="Altura em cm. Sem ponto ou vírgula."
          value={alt}
          onChange={(e) => setAlt(e.target.value)}
        />


        <button
          className='actions'
          onClick={calcImc}
        >
          Calcular
        </button>
      </div>


      <h3> {message} </h3>

    </div>



  );
}

export default App;
