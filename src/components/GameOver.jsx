import { useDispatch, useSelector } from "react-redux";
import { newGame } from "../../store/slices/quizSlice";
import Confetti from 'react-confetti'
import useSound from "use-sound";
import theme from '../assets/audio/theme.mp3';
import { useEffect } from "react";
import { motion } from "framer-motion";


const GameOver = () => {
    const dispatch = useDispatch();
    const score = useSelector(state => state.quiz.score);
    const [playTheme, { stop: stopTheme }] = useSound(theme, { interrupt: true, volume: 0.3 });

    const { width, height } = window.screen;

    useEffect(() => {
        playTheme();
        return () => { stopTheme() }
    }, [stopTheme])


    return (
        <div className="pt-16 pb-12">

            {score > 0 && <Confetti width={width} height={height} className="w-full h-full" />}

            {score != null
                ? <motion.h1
                    initial={{ opacity: 0, y: 200, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                    className="text-4xl md:text-7xl text-center text-white">You Won: &nbsp;<span className='text-orange-500'>₹{score}</span> </motion.h1>
                : <>
                    <motion.h1
                        initial={{ opacity: 0, y: 200, scale: 0.5 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                        className="text-4xl md:text-6xl text-center text-white font-semibold">Welcome To KBC</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 100 }}
                        className="px-4 text-justify mt-8 md:mt-16 max-w-6xl text-base md:text-xl" >
                        Welcome to our free online version of the legendary game show "Kaun Banega Crorepati". <br /><br />
                        Test your knowledge and nerves as you take on 16 thrilling questions. With just 40 seconds to answer each question, the pressure is on! You'll be presented with four options (A, B, C, D) for each question, and making the right choice is crucial to moving forward in the game. As you climb higher, the questions become more challenging, offering an electrifying experience that keeps you on the edge of your seat. <br /><br />
                        We have also included four powerful lifelines to assist you on your quest for the grand prize. The "Audience Poll" lets you tap into the wisdom of the masses, gaining valuable insights from the virtual audience's votes. "Phone a Friend" allows you to seek help from a trusted confidant, increasing your chances of finding the right answer. Feeling daring? The "Fifty-Fifty" lifeline eliminates two incorrect options, improving your odds. And for those game-changing moments, the "Flip the Question" lifeline lets you trade the current question for a new one. These lifelines are your key to success as you progress through the rounds and inch closer to becoming the next Crorepati!
                        <br /><br />
                        So, are you ready to challenge yourself and see if you have what it takes to become the next Crorepati? Play now and find out!

                    </motion.p>
                </>
            }
            <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: 'spring', stiffness: 100, delay: 1 }}
                className='bg-violet-700 text-xl md:text-2xl border-0 block mx-auto mt-8 md:mt-16 rounded-lg py-2 px-8' onClick={() => { dispatch(newGame()) }} >Start New Game</motion.button>
        </div>
    );
}

export default GameOver;