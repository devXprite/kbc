import { motion } from "framer-motion";

const QuestionBox = ({ qus }) => {
    return (
        <div
            className="questionBox"
        >
            <motion.p
                key={qus}
                initial={{ opacity: 0 , scale: 0.5  }}
                animate={{ opacity: 1 , scale: 1 }}
                transition={{ duration: 0.5 }}
            >{qus}</motion.p>
        </div>
    );
}

export default QuestionBox;