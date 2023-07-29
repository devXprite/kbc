import { FaPhoneAlt, } from 'react-icons/fa';
import { IoIosPeople, IoMdCall } from 'react-icons/io';
import { LuRefreshCcw } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { useLifeLine } from '../../store/slices/quizSlice';
import phoneFriend from '../../utils/phoneFriend';


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

const LifeLines = ({answer, prefix}) => {

    const dispatch = useDispatch()
    const { lifeLines } = useSelector(state => state.quiz);

    const handleClick = (lifeline) => {
        dispatch(useLifeLine(lifeline));

        if (lifeline == 'phone_a_friend') {
            alert(phoneFriend(answer))
        }
    }

    return (
        <div className="md:mt-[3vh] translate-y-[125%]   flex justify-around items-center max-w-xl mx-auto  text-white">
            {Object.keys(lifeLines).map((key, i) => (
                <div
                    key={i}
                    onClick={() => handleClick(key)}
                    className={`text-xl md:text-3xl flex justify-center items-center border-2 rounded-[50%] w-16 md:w-20 h-12 md:h-14 p-2 bg-gradient-to-br from-violet-700 to-violet-950 cursor-pointer transition-all hover:scale-110 ${!lifeLines[key] ? 'cursor-not-allowed opacity-50 hover:scale-100' : ''}`}
                >
                    {iconsObj[key].icon}
                </div>
            ))}

        </div>
    );
}

export default LifeLines;