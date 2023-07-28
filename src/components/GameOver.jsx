import { useDispatch, useSelector } from "react-redux";
import { newGame } from "../../store/slices/quizSlice";
import Confetti from 'react-confetti'
import useSound from "use-sound";
import theme from '../assets/audio/theme.mp3';
import { useEffect } from "react";


const GameOver = () => {
    const dispatch = useDispatch();
    const score = useSelector(state => state.quiz.score);
    const [playTheme, { stop: stopTheme }] = useSound(theme, { interrupt: true, volume: 0.2 });

    const { width, height } = window.screen;

    useEffect(() => {
        playTheme();
        return () => { stopTheme() }
    }, [stopTheme])


    return (
        <div>

            {score > 0 && <Confetti width={width} height={height} className="w-full" />}

            {score != null
                ? <h1 className="text-4xl md:text-7xl text-center text-white">You Won: &nbsp;<span className='text-orange-500'>₹{score}</span> </h1>
                : <h1 className="text-4xl md:text-7xl text-center text-white">Welcome To KBC</h1>}
            <button className='block mx-auto mt-16 border-2 rounded py-2 px-6 text-xl' onClick={() => { dispatch(newGame()) }} >Start New Game</button>
        </div>
    );
}

export default GameOver;