import { createSlice } from "@reduxjs/toolkit";
import randomQuestions, { flipQuestion } from "../../data/questions";

const initialState = {
    isGameOver: false,
    score: null,
    questionIndex: 0,
    timer: 40,
    pauseTimer: false,
    isTimeOut: false,
    questionsData: randomQuestions(),
    lifeLines: {
        fifty_fifty: true,
        phone_a_friend: true,
        ask_the_audience: true,
        flip_the_question: true,
    },
    isDialogOpen: false,
    isMuted: false,
};


const quizSlice = createSlice({
    name: "quiz",
    initialState: initialState,
    reducers: {
        updateQuestionIndex: (state) => {
            state.questionIndex++;
            state.pauseTimer = false;
            state.timer = initialState.timer;

            if (state.questionIndex <= 5) {
                state.score += 1000;
            } else {
                state.score += state.score;
            }

            if (state.questionIndex == 15) {
                state.isGameOver = true;
            }

        },
        pauseTimer: (state, action) => {
            state.pauseTimer = action?.payload ?? true;
        },
        countdown: (state) => {
            if (state.timer === 0) {
                state.pauseTimer = true;
                state.isTimeOut = true;
            } else {
                state.timer--;
            }
        },
        gameOver: (state) => {
            state.isGameOver = true;
        },
        newGame: (state) => {
            return {
                ...initialState, 
                isMuted: state.isMuted,
                questionsData: randomQuestions(), 
                score: 0,
            };
        },
        useLifeLine: (state, action) => {
            const lifeLine = action.payload;
            state.lifeLines[lifeLine] = false;

            if(lifeLine == 'flip_the_question'){
                const {questionIndex} = state;
                state.questionsData[questionIndex] = flipQuestion(questionIndex);
                state.timer = initialState.timer;
            }
        },
        dialog: (state, action) => {
            state.isDialogOpen = action.payload;
        },
        toogleSound: (state) => {
            state.isMuted = !state.isMuted;
            Howler.mute(state.isMuted);
        }
    },
});

export const {
    updateQuestionIndex,
    setScore,
    pauseTimer,
    gameOver,
    countdown,
    newGame,
    useLifeLine,
    toogleSound,
} = quizSlice.actions;

export default quizSlice.reducer;


