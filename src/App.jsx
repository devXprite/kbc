import './App.scss'
import Trivia from './components/Trivia'
import { useSelector } from 'react-redux';
import GameOver from './components/GameOver';

function App() {
  const { isGameOver, score } = useSelector(state => state.quiz);

  return (
    <>
      <main className='flex justify-center items-center min-h-screen'>
        {isGameOver || score === null ? <GameOver /> : <Trivia />}
      </main>
    </>
  )
}

export default App
