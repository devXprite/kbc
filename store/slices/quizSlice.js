import { createSlice } from "@reduxjs/toolkit";
import randomQuestions from "../../data/questions";

const initialState = {
    isGameOver: false,
    score: null,
    questionIndex: 0,
    timer: 40,
    pauseTimer: false,
    isTimeOut: false,
    questionsData: randomQuestions(),
    lifeLines: {
        // fiftyFifty: true,
        phone_a_friend: true,
        ask_the_audience: true,
        flip_the_question: true,
    },
    isDialogOpen: false,
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
                questionsData: randomQuestions(), 
                score: 0,
            };
        },
        useLifeLine: (state, action) => {
            state.lifeLines[action.payload] = false;
        },
        dialog: (state, action) => {
            state.isDialogOpen = action.payload;
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
    useLifeLine
} = quizSlice.actions;

export default quizSlice.reducer;


