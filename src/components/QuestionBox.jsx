const QuestionBox = ({ qus }) => {
    return (
        <div className="questionBox">
            <p className="text-2xl md:text-3xl text-center">{qus}</p>
        </div>
    );
}

export default QuestionBox;