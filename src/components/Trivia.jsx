import { useState } from "react";
import Answers from "./Answers";
import QuestionBox from "./QuestionBox";
import Timer from "./Timer";
import { useEffect } from "react";

const Trivia = ({ data }) => {

    const { question, answers } = data;
    const [timeOut, setTimeOut] = useState(10);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeOut(prev => {
                if (prev <= 1) { clearInterval(intervalId) }
                return prev - 1;
            })
        }, 1000);

        return () => { clearInterval(intervalId) };
    }, []);




    return (
        <div className='max-w-6xl mx-auto px-4'>
            <Timer count={timeOut} />
            <QuestionBox qus={question} />
            <div className='mt-12 grid gap-4 md:gap-y-6 md:gap-x-24 grid-cols-1 md:grid-cols-2' >
                {answers.map(({ value, isRight=false }, i) => <Answers key={i} id={i} value={value} isRight={isRight} />)}
            </div>
        </div>
    );
}

export default Trivia;