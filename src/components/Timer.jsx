import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countdown } from "../../store/slices/quizSlice";

const Timer = () => {
    
    const dispatch = useDispatch();
    
    const timer = useSelector(state => state.quiz.timer);
    const isTimerPaused = useSelector(state => state.quiz.pauseTimer);


    useEffect(() => {
        const intervalId = setInterval(() => {
            if (isTimerPaused) return;
            dispatch(countdown());
        }, 1000);

        return () => { clearInterval(intervalId) };
    }, [isTimerPaused]);


    return (
            <div className="bg-blue-800 w-28 md:w-56 mt-2 mb-12 md:mb-28 md:-translate-y-[1/10] aspect-square rounded-full flex items-center justify-center mx-auto timer-border">
                <p className="text-5xl md:text-8xl">
                    {timer}
                </p>
            </div>
    );
}

export default Timer;