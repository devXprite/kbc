import { useState } from 'react'
import './App.scss'
import Trivia from './components/Trivia'

function App() {

  const data = {
    question: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet',
    answers: [
      { value: 'lorem' },
      { value: 'Prateek Singh' },
      { value: 'Devxprite', isRight: true },
      { value: 'wunbfun jjdkkomn  nnhdsel ' },
    ]

  }

  return (
    <>
      <main>

        <Trivia data={data} />
      </main>
    </>
  )
}

export default App
