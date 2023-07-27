import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./slices/quizSlice";

export default configureStore({
    reducer: {
        quiz: quizReducer,
    },
});

