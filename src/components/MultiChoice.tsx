'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { selectAnswer, addCurrentQuestionIndex } from '@/store/features/quiz/quizSlice';

type MultiChoice = {
  correct_answer: string;
  multipleChoice: string[];
};

export default function MultiChoiceComponent({ multipleChoice, correct_answer }: MultiChoice) {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isShowResult, setIsShowResult] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const handleSelectAnswer = (selectedAnswer: string) => {
    setIsShowResult(true);
    setSelectedAnswer(selectedAnswer);
    dispatch(selectAnswer({ selectedAnswer }));
    if (correct_answer === selectedAnswer) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }

    setTimeout(() => {
      dispatch(addCurrentQuestionIndex())
      setIsShowResult(false);
      setSelectedAnswer('');
      setIsAnswerCorrect(false);
    }, 3000);
  };


  return (
    <div className="">
      <div className='text-center my-3 font-medium'>
        {isShowResult && <div> {isAnswerCorrect ? <div className='font-semibold'>🎉 Correct 🎉 </div> : <div className='text-red-600'>😢 Incorrect Answer</div>}  </div>}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-5 lg:mx-0 lg:max-w-none" >
          {multipleChoice?.map((choice, index) => (
            <button className={`flex flex-col items-start justify-between cursor-pointer hover:border-purple-500 hover:border-2 hover:rounded-2xl disabled:border-0 disabled:cursor-not-allowed ease-in ${isShowResult && isAnswerCorrect ? 'correct' : 'incorrect'} ${choice === selectedAnswer ? 'same' : ''} ${isShowResult && choice === correct_answer ? 'correct-answer' : ''}`} key={index} onClick={() => handleSelectAnswer(choice)} disabled={isShowResult}>
              <div className="relative w-full border-0">
                <h3 className=' text-black text-lg text-left mx-6 py-2'><span className='mx-2'>{index + 1}.</span>{choice}</h3>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </button>
          ))}
          <div></div>
        </div>
      </div>
    </div >
  )
}
