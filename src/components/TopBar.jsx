import { useSelector } from "react-redux";

const TopBar = () => {

    const questionNumber = useSelector(state => state.quiz.questionIndex + 1);
    const score = useSelector(state => state.quiz.score);

    return (
        <div className="absolute top-2 md:top-6 left-1/2 -translate-x-1/2 text-lg md:text-3xl w-[90vw] max-w-7xl flex justify-between text-orange-400">
            <p>Question: <span className="text-white font-normal">{questionNumber}</span></p>
            <p>You Won : <span className="text-white font-normal">₹ {score}</span></p>
        </div>
    );
}

export default TopBar;