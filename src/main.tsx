import React from 'react'
import ReactDOM from 'react-dom/client'

import { Tweet } from './components/Tweet'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Tweet user="Rodrigo" likes={10}>
      Meu primeiro tweet
    </Tweet>

    <Tweet user="Diego">
      Hello World
    </Tweet>

    <Tweet user="Carla">
      Testaaaaaaaando
    </Tweet>

    <Tweet user='Genivaldo'>
      Conteudo 4
    </Tweet>
  </React.StrictMode>,
)
