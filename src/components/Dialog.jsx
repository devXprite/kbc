import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion"
import { pauseTimer } from "../../store/slices/quizSlice";
import { useEffect } from "react";
import { BiLoaderCircle } from 'react-icons/bi'
import { RiLoader5Fill } from 'react-icons/ri'

const Dialog = ({ children, onClose, isOpen = true, title, loader = false }) => {
    const [showLoader, setShowLoader] = useState(loader);
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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            onClick={handleOuterClick}
            className="fixed top-0 left-0 z-10 w-screen h-screen bg-black/40 backdrop-blur-sm flex items-center justify-center"
        >

            {
                showLoader ? (
                    <motion.div
                        key={'load'}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: 2 }}
                        onAnimationComplete={() => setShowLoader(false)}
                    >
                        <RiLoader5Fill className="text-5xl md:text-7xl text-white" />
                    </motion.div>
                ) : (
                    <motion.div
                        key={'dialog'}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", duration: 1.2, bounce: 0.35, delay: 0.15 }}
                        className="bg-violet-950 p-4 md:p-8 rounded-lg border-2 border-violet-500 w-[90vw] max-w-xl shadow-lg overflow-hidden"
                        exit={{ scale: 0, opacity: 0 }}
                    >
                        {title && <h2 className="text-xl md:text-2xl mb-4 font-bold text-center">{title}</h2>}
                        {children}
                        {/* <button
                            onClick={close}
                            className=" bg-violet-700 px-4 py-1 shadow-md border-violet-500 border rounded-md mt-4 md:mt-8 ml-auto mr-0 block">
                            Close
                        </button> */}
                    </motion.div>
                )


            }
        </motion.div >
    );
}

export default Dialog;