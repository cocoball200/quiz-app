'use client';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { fetchQuizzes, resetQuiz } from '@/store/features/quiz/quizSlice';
import { AppDispatch, RootState } from '@/store/store';
import QuestionCard from '@/components/QuestionCard';
import MultiChoice from '@/components/MultiChoice';


const Quiz: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { quizzes, score, loading, error, category, difficulty, currentQuestionIndex } = useSelector((state: RootState) => state.quizStore);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchQuizzes({ category: category.key, difficulty: difficulty.key }));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch]);


  const handleRestart = () => {
    dispatch(resetQuiz());
    router.push('/category');

  }

  if (loading) {
    return <></>;
  }

  if (error) {
    return <div>{error}</div>;
  }


  if (currentQuestionIndex >= quizzes.length) {
    return (
      <div className="">
        <div className='h-[240px] rounded-b-3xl bg-purple-500 static'></div>
        <div className="flex justify-center">
          <Image src='/logo.png' width={40} height={40} alt="logo" className='z-50 relative top-[-216px]' />
        </div>
        <div className='h-[220px] z-0 relative top-[-82px] bg-white rounded-3xl mx-auto w-[96%] shadow-lg flex justify-center items-center'>
          <div className='flex justify-center flex-col items-center'>
            <h1 className='text-xl font-semibold'>Your Score </h1>
            <h1 className='text-xl font-semibold'>{score} / 5</h1></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className='text-center text-xl font-extrabold'>COMPLETED</h1>
        </div>
        <button className='mt-5 hero-button w-[80%] m-auto flex items-center justify-center px-7.5 py-2.5 text-lg font-semibold q-shadow mb-1 h-10 base bg-purple-700 text-light-3 hover:bg-purple-500 active:bg-purple-900 rounded-lg primary transition-colors duration-200 ease-in-out relative min-w-max text-white' onClick={handleRestart}>
          <span className='hero-button-title font-bold'>RESTART</span>
        </button>
      </div>

    );
  }

  return (
    <div>
      <QuestionCard score={score} category={category} question={quizzes[currentQuestionIndex]?.question} difficulty={difficulty} />
      <MultiChoice multipleChoice={quizzes[currentQuestionIndex].multipleChoice} correct_answer={quizzes[currentQuestionIndex].correct_answer} />
    </div>
  );
};

export default Quiz;
