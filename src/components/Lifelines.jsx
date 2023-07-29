import { FaPhoneAlt, } from 'react-icons/fa';
import { IoIosPeople, IoMdCall } from 'react-icons/io';
import { LuRefreshCcw } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { useLifeLine } from '../../store/slices/quizSlice';
import phoneFriend from '../../utils/phoneFriend';
import Dialog from './Dialog';
import { useState } from 'react';


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
    }


    const handleClick = (lifeline) => {
        dispatch(useLifeLine(lifeline));
        setSelected(lifeline)

        if (lifeline == 'phone_a_friend') {
            setIsDialogOpen(true);
        }
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
            {isDialogOpen && <Dialog onClose={() => setIsDialogOpen(false)}>
                {dialogContent(selected)}
            </Dialog>}
        </>
    );
}

export default LifeLines;