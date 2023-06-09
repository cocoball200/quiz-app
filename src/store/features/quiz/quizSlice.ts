import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Key } from 'react';

interface Quiz {
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  multipleChoice: string[];
  difficulty: string;
  type: string;
  id: number;
}

interface QuizState {
  quizzes: Quiz[];
  currentQuestionIndex: number;
  score: number;
  loading: boolean;
  error: string | null;
  difficulty: { key: string, value: string };
  category: { key: number, value: string };
}

const initialState: QuizState = {
  quizzes: [],
  currentQuestionIndex: 0,
  score: 0,
  loading: false,
  error: null,
  category: { key: 0, value: "" },
  difficulty: { key: "", value: "" },
};

const shuffleArray = (array: Array<string>) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const addIdToQuizzes = (quizzesData: any[]): Quiz[] => {
  return quizzesData.map((quiz, index) => ({
    id: index,
    multipleChoice: shuffleArray([...quiz.incorrect_answers, quiz.correct_answer]),
    ...quiz,
  }));
};

export const fetchQuizzes = createAsyncThunk('quiz/fetchQuizzes', async ({ difficulty, category }: { difficulty: string, category: number | null }) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}?amount=5&category=${category}&difficulty=${difficulty}`);
  const data = await response.json();
  const quizzesData = data.results;
  const quizzesWithId = addIdToQuizzes(quizzesData);
  return quizzesWithId;
});

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      const { selectedAnswer } = action.payload;
      const currentQuestion = state.quizzes[state.currentQuestionIndex];
      const isCorrect = selectedAnswer === currentQuestion.correct_answer;

      if (isCorrect) {
        state.score += 1;
      }
    },
    resetQuiz: (state) => {
      Object.assign(state, initialState);
    },
    addCurrentQuestionIndex: (state) => {
      state.currentQuestionIndex += 1;
    },
    addQuizDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    addQuizCategory: (state, action) => {
      state.category = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizzes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuizzes.fulfilled, (state, action) => {
        state.loading = false;
        state.quizzes = action.payload;
      })
      .addCase(fetchQuizzes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch quizzes.';
      });
  },
});

export const { selectAnswer, resetQuiz, addQuizCategory, addQuizDifficulty, addCurrentQuestionIndex } = quizSlice.actions;
export default quizSlice.reducer;
