import './App.scss'
import Trivia from './components/Trivia'
import { useSelector } from 'react-redux';
import GameOver from './components/GameOver';

function App() {
  const isGameOver = useSelector(state => state.quiz.isGameOver);
  // const score = useSelector(state => state.quiz.score);

  // console.log(score);

  return (
    <>
      <main className='flex justify-center items-center min-h-screen'>
        {isGameOver ? <GameOver /> : <Trivia />}
      </main>
    </>
  )
}

export default App
