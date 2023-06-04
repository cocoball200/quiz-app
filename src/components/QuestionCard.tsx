import React from 'react';
import Image from 'next/image';

type CardType = {
  question: string;
  score: number;
  difficulty: { key: string, value: string };
  category: { key: number, value: string }
};

export default function QuestionCard({ question, score, category, difficulty }: CardType) {
  return (
    <div className="h-[410px]">
      <div className='h-[240px] rounded-b-3xl bg-[#b168f1] static'>
        <div className="flex justify-center flex-col items-center mx-4 gap-1">
          <Image src='/logo.png' width={40} height={40} alt="logo" className='relative mt-5' />
          <div className='self-start text-white text-base font-medium'>Category: <span className='mx-1'>{category.value}</span></div>
          <div className='self-start text-white text-base font-medium'>Difficulty:<span className='mx-1'>{difficulty.value}<span></span></span></div>
          <div className='self-start text-white text-base font-medium'>Score:<span className='mx-1'>{score}</span>/ 5</div>
        </div>
      </div>
      <div className='h-[220px] z-0 relative top-[-82px] bg-white rounded-3xl mx-auto w-[96%] shadow-lg flex justify-center items-center px-3'>
        <h1 className='text-xl font-semibold'>{question || ''} </h1>
      </div>
    </div>
  )
}
