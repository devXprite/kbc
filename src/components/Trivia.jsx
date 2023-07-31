import { useState } from "react";
import QuestionBox from "./QuestionBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameOver, pauseTimer, updateQuestionIndex } from "../../store/slices/quizSlice";
import Timer from "./Timer";
import { useRef } from "react";
import TopBar from "./TopBar";
import { motion } from "framer-motion"

import lets_play from '../assets/audio/lets_play.mp3';
import correct_answer from '../assets/audio/correct_answer.mp3';
import wrong_answer from '../assets/audio/wrong_answer.mp3';
import timeout from '../assets/audio/timeout.mp3';

import useSound from "use-sound";
import LifeLines from "./Lifelines";
import Dialog from "./Dialog";

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const Trivia = () => {
    const dispatch = useDispatch();
    const [playLetsPlay, { stop: stopLetsPlay }] = useSound(lets_play, { interrupt: true });
    const [playCorrectAnswer] = useSound(correct_answer);
    const [playWrongAnswer] = useSound(wrong_answer);
    const [playTimeout] = useSound(timeout);

    const correctAnswerRef = useRef(null);
    const [selected, setSelected] = useState(null);
    const [className, setClassName] = useState(null);

    const { isTimeOut, questionsData, questionIndex: questionNumber } = useSelector(state => state.quiz);
    const { question, answers } = questionsData[questionNumber];

    const prefixs = ['A', 'B', 'C', 'D'];

    const handleClick = async (e) => {
        if (selected != null) return;

        const id = e.target.dataset.id;
        const correct = answers[id].correct || false;

        stopLetsPlay()
        setSelected(id);
        dispatch(pauseTimer());

        setClassName('selected');

        await sleep(500);
        correct ? playCorrectAnswer() : playWrongAnswer();

        await sleep(1000);
        setClassName(correct ? 'right' : 'wrong');
        if (!correct) correctAnswerRef.current.classList.add('right');

        await sleep(3000);
        if (correct) { dispatch(updateQuestionIndex()); return; }
        dispatch(gameOver());
    }

    useEffect(() => {
        setSelected(null);
        playLetsPlay();
        return () => { stopLetsPlay(); }
    }, [question, stopLetsPlay]);


    useEffect(() => {
        if (isTimeOut) {
            playTimeout();
            correctAnswerRef.current.classList.add('right');
            setTimeout(() => { dispatch(gameOver()) }, 3000)
        }
    }, [isTimeOut]);


    return (
        <>
            {/* <TopBar /> */}
            <div className='max-w-6xl mx-auto px-4 pt-20 pb-8 w-full md:-mt-20 relative'>
                <Timer />
                <QuestionBox qus={question} />
                <div className='mt-12 grid gap-4 md:gap-y-6 md:gap-x-24 grid-cols-1 md:grid-cols-2' >

                    {answers.map(({ value, correct = false }, i) => (
                        <motion.div
                            data-id={i}
                            key={`${i}-${value}`}
                            className={`answerBox ${i == selected ? className : ''}`}
                            onClick={handleClick}
                            initial={{ rotateX: 90 }}
                            animate={{ rotateX: 0 }}
                            ref={correct ? correctAnswerRef : null}
                            transition={{ delay: 0.5 + i * 0.2, duration: 0.4 }}
                            id={'answerBox-' + i}
                        >
                            <p className="flex pointer-events-none" >
                                <span className="font-bold px-1">{prefixs[i]}: </span>
                                <span className="flex-1">{value}</span>
                            </p>
                        </motion.div>
                    ))}
                </div>
                <LifeLines
                    index={answers.findIndex(({ correct }) => correct)}
                    answer={answers.find(({ correct }) => correct).value}
                    prefix={prefixs[answers.findIndex(({ correct }) => correct)]}
                />

            </div>
        </>
    );
}

export default Trivia;