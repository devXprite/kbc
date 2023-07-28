import './App.scss'
import Trivia from './components/Trivia'
import { useSelector } from 'react-redux';
import GameOver from './components/GameOver';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from 'react';

function App() {
  const { isGameOver, score } = useSelector(state => state.quiz);

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
              resize: true,
          },
          particles: {
            color: {
              value: "#c4b5fd",
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 70,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />
      <main className='flex justify-center items-center min-h-screen'>
        {isGameOver || score === null ? <GameOver /> : <Trivia />}
      </main>
    </>
  )
}

export default App
