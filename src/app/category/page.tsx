'use client';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuizzes, selectAnswer, resetQuiz } from '@/store/features/quiz/quizSlice';
import { AppDispatch, RootState } from '@/store/store';
import QuizBox from "@/components/Category";
import Category from '@/components/Category';

const Quiz: React.FC = () => {
  return (
    <div>
      <Category />
    </div>
  );
};


export default Quiz;
