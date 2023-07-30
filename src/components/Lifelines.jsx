import { FaPhoneAlt, } from 'react-icons/fa';
import { IoIosPeople, IoMdCall } from 'react-icons/io';
import { LuRefreshCcw } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { useLifeLine } from '../../store/slices/quizSlice';
import phoneFriend from '../../utils/phoneFriend';
import Dialog from './Dialog';
import { useState } from 'react';
import { motion } from "framer-motion"


const iconsObj = {
    phone_a_friend: {
        icon: <IoMdCall />,
        name: 'Phone a Friend'
    },
    flip_the_question: {
        icon: <LuRefreshCcw />,
        name: 'Flip the Question'
    },
    ask_the_audience: {
        icon: <IoIosPeople />,
        name: 'Ask the Audience'
    }
}

// md:mt-[5vh] translate-y-full 
// absolute w-full left-1/2 -bottom-8 -translate-x-1/2   

const LifeLines = ({ answer, prefix }) => {

    const dispatch = useDispatch()
    const { lifeLines } = useSelector(state => state.quiz);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const dialogContent = (lifeline) => {
        if (lifeline == 'phone_a_friend') {
            return (
                <>
                    <p className='mb-2 text-lg md:text-xl'><b>Your friend says:</b></p>
                    <p className='text-base md:text-lg'>{phoneFriend(answer)}</p>
                </>
            )
        }

        if (lifeline == 'ask_the_audience') {
            return (
                <div className='grid grid-cols-4 justify-items-center gap-y-2'>
                    {['A', 'B', 'C', 'D'].map((e, i) => (
                        <motion.div
                            key={e}
                            animate={{
                                scaleY: [0.25, 1, 0.5, (e == prefix ? 1 : Math.abs((Math.random() - 0.5) + 0.25))],
                            }}
                            transition={{ duration: 1.5, repeat: 3, repeatType: 'mirror', delay: i * 0.2, ease: 'linear' }}
                            className='w-6 md:w-12 h-40 md:h-60 bg-gradient-to-b from-amber-300 to-amber-500  rounded origin-bottom' >
                        </motion.div>
                    ))}
                    {['A', 'B', 'C', 'D'].map(e => ( <p className='font-bold md:text-xl'>{e}</p> ))
                    }

                </div>
            )
        }

    }


    const handleClick = (lifeline) => {
        dispatch(useLifeLine(lifeline));
        setSelected(lifeline)

        if (lifeline == 'phone_a_friend' || lifeline == 'ask_the_audience') setIsDialogOpen(true)
    }

    return (
        <>
            <div className="mt-10 md:mt-[3vh] md:translate-y-[125%]  flex justify-around items-center max-w-xl mx-auto  text-white">
                {Object.keys(lifeLines).map((key, i) => (
                    <div
                        key={i}
                        onClick={() => handleClick(key)}
                        className={`text-xl md:text-3xl flex justify-center items-center border-2 rounded-[50%] w-14 h-12 md:w-20 md:h-14 p-2 pb bg-gradient-to-br from-violet-700 to-violet-950 cursor-pointer transition-all hover:scale-110 ${!lifeLines[key] ? 'cursor-not-allowed opacity-50 hover:scale-100' : ''}`}
                    >
                        {iconsObj[key].icon}
                    </div>
                ))}
            </div>
            {isDialogOpen && <Dialog onClose={() => setIsDialogOpen(false)} loader={false}>
                {dialogContent(selected)}
            </Dialog>}
        </>
    );
}

export default LifeLines;