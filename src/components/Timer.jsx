import { useEffect } from "react";
import { useState } from "react";

const Timer = ({  setTimeOut, questionNumber }) => {
    const [timer, setTimer] = useState(60);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer(prev => {
                if (prev <= 1) { clearInterval(intervalId); setTimeOut(false); }
                return prev - 1;
            })
        }, 1000);

        return () => { clearInterval(intervalId) };
    }, []);

    useEffect(() => {
        setTimer(60);
    }, [questionNumber]);

    return (
            <div className="bg-blue-800 w-32 md:w-56 mb-16 md:mb-28 md:-translate-y-[1/10] aspect-square rounded-full flex items-center justify-center mx-auto timer-border">
                <p className="text-6xl md:text-8xl">
                    {timer}
                </p>
            </div>
    );
}

export default Timer;