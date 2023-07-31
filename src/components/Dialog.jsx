import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion"
import { pauseTimer } from "../../store/slices/quizSlice";
import { useEffect } from "react";
import { BiLoaderCircle } from 'react-icons/bi'
import { RiLoader5Fill } from 'react-icons/ri'

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
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 1.2, bounce: 0.35 }}
                    className="bg-violet-950 p-4 md:p-8 rounded-lg border-2 border-violet-500 w-[90vw] md:w-auto max-w-3xl shadow-lg overflow-hidden"
                >
                    {title && <h2 className="text-xl md:text-2xl mb-4 font-bold text-center">{title}</h2>}
                    {children}
                    {/* <button
                            onClick={close}
                            className=" bg-violet-700 px-4 py-1 shadow-md border-violet-500 border rounded-md mt-4 md:mt-8 ml-auto mr-0 block">
                            Close
                        </button> */}
                </motion.div>
            }
        </div >
    );
}

export default Dialog;