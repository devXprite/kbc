import { useState } from "react";
import QuestionBox from "./QuestionBox";
import { useEffect } from "react";

const Trivia = ({ children, data, questionNumber, setQuestionNumber, setTimeOut }) => {

    const prefixs = ['A', 'B', 'C', 'D'];
    const { question, answers } = data[questionNumber];
    const [selected, setSelected] = useState(null);
    const [className, setClassName] = useState(null);

    const handleClick = (e) => {
        const id = e.target.dataset.id;
        const correct = answers[id].correct || false;

        setSelected(id);
        setClassName(correct ? 'right' : 'wrong');

        setTimeout(() => {
            if (correct) {
                setQuestionNumber(prev => prev + 1);
                return;
            }

            setTimeOut(true);
        }, 2000);


    }

    useEffect(() => {
        setSelected(null);
    }, [questionNumber]);


    return (
        <div className='max-w-6xl mx-auto px-4 w-full md:-translate-y-[5%]'>
            {children}
            <QuestionBox qus={question} />
            <div className='mt-12 grid gap-4 md:gap-y-6 md:gap-x-24 grid-cols-1 md:grid-cols-2' >
                {answers.map(({ value, correct = false }, i) => (
                    <div className={`answerBox ${i == selected ? className : ''}`} key={i} data-id={i} onClick={handleClick}  >
                        <p className="flex pointer-events-none" >
                            <span className="font-bold px-1">{prefixs[i]}: </span>
                            <span className="flex-1">{value}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Trivia;