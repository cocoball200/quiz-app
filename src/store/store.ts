import { configureStore } from '@reduxjs/toolkit';
import { QuizReducer } from '@/store/features';

export const store = configureStore({
  reducer: { quizStore: QuizReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch