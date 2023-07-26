
import { useState } from 'react';
import './App.scss'
import Trivia from './components/Trivia'
import Timer from './components/Timer';
import questions from '../data/questions';
import { useEffect } from 'react';

function App() {

  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setScore(()=>{
      return (questionNumber * 800);
    });
  }, [questionNumber]);

  return (
    <>
      <main className='flex justify-center items-center min-h-screen'>
        {
          timeOut ? (
            <div>
              <h1 className="text-4xl md:text-7xl text-center text-white">You earned: &nbsp;<span className='text-orange-500'>₹{score}</span> </h1>
              <button className='block mx-auto mt-16 border-2 rounded py-2 px-6 text-xl' onClick={()=>{setTimeOut(false); setQuestionNumber(0)}} >Restart Game</button>
            </div>
          )
            : (<Trivia data={questions} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} setTimeOut={setTimeOut} >
              <Timer setTimeOut={setTimeOut} questionNumber={questionNumber} />
            </Trivia>)
        }

      </main>
    </>
  )
}

export default App
