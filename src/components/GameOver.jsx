import { useDispatch, useSelector } from "react-redux";
import { newGame } from "../../store/slices/quizSlice";
import Confetti from 'react-confetti'
import useSound from "use-sound";
import theme from '../assets/audio/theme.mp3';
import { useEffect } from "react";

const GameOver = () => {
    const dispatch = useDispatch();
    const score = useSelector(state => state.quiz.score);
    const [playTheme, { stop: stopTheme }] = useSound(theme, { interrupt: true, volume: 0.15 });

    const { width, height } = window.screen;

    useEffect(() => {
        playTheme();
        return () => { stopTheme() }
    }, [stopTheme])


    return (
        <div>

            {score > 0 && <Confetti width={width} height={height} className="w-full h-full" />}

            {score != null
                ? <h1 className="text-4xl md:text-7xl text-center text-white">You Won: &nbsp;<span className='text-orange-500'>₹{score}</span> </h1>
                : <>
                    <h1 className="text-4xl md:text-6xl text-center text-white font-semibold">Welcome To KBC</h1>
                    <p className="px-4 text-justify mt-8 md:mt-16 max-w-4xl text-base md:text-xl" >
                        Test your knowledge and nerves as you take on 16 thrilling questions. With just 40 seconds to answer each question, the pressure is on! You'll be presented with four options (A, B, C, D) for each question, and making the right choice is crucial to moving forward in the game. As you climb higher, the questions become more challenging, offering an electrifying experience that keeps you on the edge of your seat. <br /><br />
                        So, are you ready to challenge yourself and see if you have what it takes to become the next Crorepati? Play now and find out!

                    </p>
                </>
            }

            <button className='bg-violet-700 text-xl md:text-2xl border-0 block mx-auto mt-8 md:mt-16 rounded-lg py-2 px-8' onClick={() => { dispatch(newGame()) }} >Start New Game</button>
        </div>
    );
}

export default GameOver;