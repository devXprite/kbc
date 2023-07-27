import { useState } from "react";
import QuestionBox from "./QuestionBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameOver, pauseTimer, updateQuestionIndex } from "../../store/slices/quizSlice";
// import questionsData from "../../data/questions";
import Timer from "./Timer";
import { useRef } from "react";
import { set, shuffle } from 'lodash';
import { useMemo } from "react";
import TopBar from "./TopBar";

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const Trivia = () => {
    const dispatch = useDispatch();
    const correctAnswerRef = useRef(null);
    const [selected, setSelected] = useState(null);
    const [className, setClassName] = useState(null);

    const isTimeOut = useSelector(state => state.quiz.isTimeOut);
    const questionsData = useSelector(state => state.quiz.questionData)
    const questionNumber = useSelector(state => state.quiz.questionIndex);

    const question = questionsData[questionNumber].question;
    const answers = questionsData[questionNumber].answers;
    // const answers = useMemo(() => shuffle(questionsData[questionNumber].answers), [questionNumber]);

    const prefixs = ['A', 'B', 'C', 'D'];

    const handleClick = async (e) => {
        const id = e.target.dataset.id;
        const correct = answers[id].correct || false;

        setSelected(id);
        dispatch(pauseTimer());

        setClassName('selected');
        
        await sleep(1500);
        setClassName(correct ? 'right' : 'wrong');

        await sleep(250);
        if (!correct) correctAnswerRef.current.classList.add('right');

        await sleep(correct ? 1000 : 2000);
        if (correct) { dispatch(updateQuestionIndex()); return; }
        dispatch(gameOver());
    }



    useEffect(() => { setSelected(null) }, [questionNumber]);

    useEffect(() => {
        if (isTimeOut) {
            correctAnswerRef.current.classList.add('right');
            setTimeout(() => { dispatch(gameOver()) }, 2000)
        }
    }, [isTimeOut])


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