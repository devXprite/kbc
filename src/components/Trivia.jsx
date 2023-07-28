import { useState } from "react";
import QuestionBox from "./QuestionBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameOver, pauseTimer, updateQuestionIndex } from "../../store/slices/quizSlice";
import Timer from "./Timer";
import { useRef } from "react";
import TopBar from "./TopBar";

import lets_play from '../assets/audio/lets_play.mp3';
import correct_answer from '../assets/audio/correct_answer.mp3';
import wrong_answer from '../assets/audio/wrong_answer.mp3';
import clock from '../assets/audio/clock.mp3';
import timeout from '../assets/audio/timeout.mp3';

import useSound from "use-sound";

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const Trivia = () => {
    const dispatch = useDispatch();
    const [playLetsPlay, { stop: stopLetsPlay }] = useSound(lets_play, { interrupt: true });
    const [playCorrectAnswer] = useSound(correct_answer);
    const [playWrongAnswer] = useSound(wrong_answer);
    const [playTimeout] = useSound(timeout);
    const [playClock, { stop: stopClock }] = useSound(clock, { interrupt: true, valume: 0.5, loop: true });

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

        setSelected(id);
        dispatch(pauseTimer());

        setClassName('selected');

        await sleep(500);
        correct ? playCorrectAnswer() : playWrongAnswer();

        await sleep(1000);
        setClassName(correct ? 'right' : 'wrong');
        if (!correct) correctAnswerRef.current.classList.add('right');
        stopClock();

        await sleep(4000);
        if (correct) { dispatch(updateQuestionIndex()); return; }
        dispatch(gameOver());
    }

    useEffect(() => {
        setSelected(null);
        playLetsPlay();
        setTimeout(playClock, 3100)
    }, [questionNumber, stopLetsPlay, stopClock]);


    useEffect(() => {
        if (isTimeOut) {
            stopClock();
            playTimeout();
            correctAnswerRef.current.classList.add('right');
            setTimeout(() => { dispatch(gameOver()) }, 2800)
        }
    }, [isTimeOut]);


    return (
        <>
            <TopBar />
            <div className='max-w-6xl mx-auto px-4 py-8 w-full md:-translate-y-[5%]'>
                <Timer />
                <QuestionBox qus={question} />
                <div className='mt-12 grid gap-4 md:gap-y-6 md:gap-x-24 grid-cols-1 md:grid-cols-2' >

                    {answers.map(({ value, correct = false }, i) => (
                        <div
                            key={i}
                            data-id={i}
                            ref={correct ? correctAnswerRef : null}
                            className={`answerBox ${i == selected ? className : ''}`}
                            onClick={handleClick}
                        >
                            <p className="flex pointer-events-none" >
                                <span className="font-bold px-1">{prefixs[i]}: </span>
                                <span className="flex-1">{value}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Trivia;