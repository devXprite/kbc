import { useRef } from "react";
import { useState } from "react";

const Answers = ({ value, id, isRight }) => {
    const answerBoxRef = useRef();
    const alphabates = ['A', 'B', 'C', 'D'];

    const handleOnClick = () =>{
        answerBoxRef.current.classList.add(isRight ? 'right' : 'wrong');
    }

    return (
        <div ref={answerBoxRef} className={`answerBox`} onClick={handleOnClick} >
            <p className="flex">
                <span className="font-bold px-1">{alphabates[id]}: </span>
                <span className="flex-1">{value}</span>
            </p>
        </div>
    );
}

export default Answers;