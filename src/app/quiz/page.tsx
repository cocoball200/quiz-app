'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuizzes, selectAnswer, addCurrentQuestionIndex, resetQuiz } from '@/store/features/quiz/quizSlice';
import { AppDispatch, RootState } from '@/store/store';
import QuizBox from "@/components/Category";

const Quiz: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { quizzes, score, loading, error, category, difficulty, currentQuestionIndex } = useSelector((state: RootState) => state.quizStore);
  const [isShowResult, setIsShowResult] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isAnswerMatching, setIsAnswerMatching] = useState(false);



  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchQuizzes({ category, difficulty }));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch]);

  console.log(quizzes);

  const handleAnswerSelect = (selectedAnswer: string) => {
    setIsAnswerMatching(true);
    setIsShowResult(true);
    dispatch(selectAnswer({ selectedAnswer }));
    if (quizzes[currentQuestionIndex]?.correct_answer === selectedAnswer) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }

    setTimeout(() => {
      dispatch(addCurrentQuestionIndex())
      setIsAnswerMatching(false);
      setIsShowResult(false);
    }, 3000);
  };


  const handleResetQuiz = () => {
    dispatch(resetQuiz());
    // router.push('/category');
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }


  if (currentQuestionIndex >= quizzes.length) {
    return (
      <div>
        <h2>Quiz Finished!</h2>
        <p>Your score: {score}</p>
        <button onClick={handleResetQuiz}>Restart Quiz</button>
      </div>
    );
  }




  const CATEGORY_DATA = {
    21: 'Sports',
    23: 'History',
    27: 'Animals',
  }

  return (
    <div>
      <div className=''>
        <div className='mt-3'>
          <div>
            <h1 className='p-2 bg-black text-white font-semibold w-30'>Category</h1>
            <div>{category}</div>
          </div>
          <h1 className='p-2 bg-black text-white font-semibold w-30'>Level</h1>
          <h1>score: {score}/5</h1>
        </div>
        <div className='flex h-5 border-b-4 mb-4 border-black '>
        </div>
        <div className='mt-3'>
          <h1 className='p-2 bg-black text-white inline-block font-semibold'>Quiz</h1>
        </div>
        <p>Question: {quizzes[currentQuestionIndex]?.question} </p>
        <div className='flex justify-center flex-col items-center'>
          {isAnswerMatching ? <div>
            {isShowResult && <div> {isAnswerCorrect ? <div>Correct</div> : <>Incorrect: Answer is {quizzes[currentQuestionIndex].correct_answer}</>}  </div>}
          </div> : <p>{quizzes[currentQuestionIndex]?.fullAnswer?.map((item) => {
            return <button key={item} onClick={() => handleAnswerSelect(item)} disabled={isAnswerMatching}>
              <div>
                {item}
              </div>
            </button>
          })}</p>}

        </div>
      </div>


    </div>
  );
};

export default Quiz;
