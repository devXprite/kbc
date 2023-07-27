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
import background_music from '../assets/audio/easy.mp3';
import timeout from '../assets/audio/timeout.mp3';

import useSound from "use-sound";

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const Trivia = () => {
    const dispatch = useDispatch();
    const [playLetsPlay, {stop: stopLetsPlay}] = useSound(lets_play);
    const [playCorrectAnswer] = useSound(correct_answer);
    const [playWrongAnswer] = useSound(wrong_answer);
    const [playTimeout] = useSound(timeout);
    const [playBg, {stop: stopBg}] = useSound(background_music, {interrupt: true, valume: 0.5});

    const correctAnswerRef = useRef(null);
    const [selected, setSelected] = useState(null);
    const [className, setClassName] = useState(null);

    const isTimeOut = useSelector(state => state.quiz.isTimeOut);
    const questionsData = useSelector(state => state.quiz.questionData)
    const questionNumber = useSelector(state => state.quiz.questionIndex);

    const question = questionsData[questionNumber].question;
    const answers = questionsData[questionNumber].answers;

    const prefixs = ['A', 'B', 'C', 'D'];

    const handleClick = async (e) => {
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
        stopBg();
        
        await sleep(4000);
        if (correct) { dispatch(updateQuestionIndex()); return; }
        dispatch(gameOver());
    }

    useEffect(() => {
        setSelected(null)
        playLetsPlay();
        setTimeout(playBg, 2500);
    }, [questionNumber]);

    useEffect(() => {
        if (isTimeOut) {
            playTimeout();
            correctAnswerRef.current.classList.add('right');
            setTimeout(() => { dispatch(gameOver()) }, 3000)
        }
    }, [isTimeOut]);


    return (
        <>
            <TopBar />
            <div className='max-w-6xl mx-auto px-4 w-full md:-translate-y-[5%]'>
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