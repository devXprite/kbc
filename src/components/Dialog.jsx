import { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion"
import { pauseTimer } from "../../store/slices/quizSlice";
import { useEffect } from "react";

const Dialog = ({ children, onClose, isOpen = true, title }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (isOpen) {
            dispatch(pauseTimer(true));
            console.log(isOpen);
        }

        console.log('inside effect');
    }, [])

    const close = () => {
        dispatch(pauseTimer(false));
        onClose();
    }

    const handleOuterClick = (e) => {
        if (e.target === e.currentTarget) close();
    }

    if (!isOpen) return null;

    return (
        <div
            onClick={handleOuterClick}
            className="fixed top-0 left-0 z-10 w-screen h-screen bg-black/40 backdrop-blur-sm flex items-center justify-center"
        >

            {
                <motion.div
                    key={'dialog'}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1}}
                    transition={{ type: "spring", duration: 1.2, bounce: 0.35 }}
                    className="bg-violet-950 p-4 md:p-8 rounded-lg border-2 border-violet-500 w-[90vw] md:w-auto max-w-3xl shadow-lg overflow-hidden"
                >
                    {title && <h2 className="text-xl md:text-2xl mb-4 font-bold text-center">{title}</h2>}
                    {children}
                    <button
                            onClick={close}
                            className="bg-violet-700 text-sm md:text-base px-4 py-1 shadow-md -mb-1 md:-mb-2 border-violet-500 border rounded mt-6 md:mt-10 mx-auto block hover:bg-violet-600 hover:scale-105 transition-all">
                            Continue to Game
                        </button>
                </motion.div>
            }
        </div >
    );
}

export default Dialog;