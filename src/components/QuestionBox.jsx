const QuestionBox = ({ qus }) => {
    return (
        <div className="pt-28">
            <div className="questionBox">
                <p className="text-xl md:text-3xl text-center">{qus}</p>
            </div>
        </div>
    );
}

export default QuestionBox;