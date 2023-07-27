import { useDispatch, useSelector } from "react-redux";
import { newGame } from "../../store/slices/quizSlice";

const GameOver = () => {
    const dispatch = useDispatch();
    const score = useSelector(state => state.quiz.score);

    return (
        <div>
            <h1 className="text-4xl md:text-7xl text-center text-white">You earned: &nbsp;<span className='text-orange-500'>₹{score}</span> </h1>
            <button className='block mx-auto mt-16 border-2 rounded py-2 px-6 text-xl' onClick={()=>{dispatch(newGame())}} >New Game</button>
        </div>
    );
}

export default GameOver;