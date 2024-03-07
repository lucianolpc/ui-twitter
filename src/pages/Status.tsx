import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'
import { PaperPlaneRight } from "phosphor-react"

/**
 * Fluxo de renderização:
 * 
 * 1. Toda vez que alteramos o estado de um componente, TODO o componente é recalculado.
 * 2. Toda vez que o seu componente PAI renderizar.
 * 3. Toda vez que algumas das suas propriedades mudarem.
*/

/** 
 * Algoritmo de reconciliação:
 * 
 * 1. Criar em memória uma nova versão HTML do documento.
 * 2. Compara essa nova versão com a versão anterior do HTML (Diff).
 * 3. Aplicar as operações JavaScript para alterar somente o necessário no HTML.
*/


export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso!'
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className="status">
      <Header title='Tweet' />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi doloremque et expedita facere perspiciatis minus est, harum ullam cumque ab incidunt dolorum optio eaque quo, autem omnis. Ipsum, necessitatibus." />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/lucianolpc.png" alt="Luciano Junior" />
          <textarea
            id="tweet"
            placeholder="Tweet your asnwer"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
          />
        </label>

        <button type='submit' >
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => {
        return (
          <Tweet key={answer} content={answer} />
        )
      })}
    </main>
  )
}