import { createSlice } from "@reduxjs/toolkit";
import randomQuestions from "../../data/questions";


const initialState = {
    isGameOver: false,
    score: 0,
    questionIndex: 0,
    timer: 60,
    pauseTimer: false,
    isTimeOut: false,
    questionData: randomQuestions()
};


const quizSlice = createSlice({
    name: "quiz",
    initialState: initialState,
    reducers: {
        updateQuestionIndex: (state) => {
            state.questionIndex++;
            state.pauseTimer = false;
            state.timer = 60;

            if (state.questionIndex <= 5) {
                state.score += 1000;
            } else {
                state.score += state.score;
            }

        },
        pauseTimer: (state) => {
            state.pauseTimer = true;
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
                ...initialState, questionData: randomQuestions()
            };
        },
    },
});

export const {
    updateQuestionIndex,
    setScore,
    pauseTimer,
    gameOver,
    countdown,
    newGame,
} = quizSlice.actions;

export default quizSlice.reducer;


