import { BiSolidVolumeFull, BiVolumeMute } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux";
import { toogleSound } from "../../store/slices/quizSlice";

const SoundBtn = () => {
    const dispatch = useDispatch();
    const { isMuted } = useSelector(state => state.quiz);

    return (
        <p
            className="absolute top-4 right-4 text-3xl md:text-5xl cursor-pointer z-10"
            onClick={() => dispatch(toogleSound())}
            >
            {!isMuted ? <BiSolidVolumeFull /> : <BiVolumeMute />}
        </p>
    );
}

export default SoundBtn;