'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addQuizDifficulty } from '@/store/features/quiz/quizSlice';
import Image from 'next/image';

const DIFFICULTY_DATA = [
  {
    key: 'easy',
    value: 'Esay',
  },
  {
    key: 'medium',
    value: 'Medium',
  },
  {
    key: 'hard',
    value: 'Hard',
  },
]

export default function DifficultyComponent() {
  const dispatch = useDispatch();
  const router = useRouter();

  async function handleDifficultySelect(key: string, value: string) {
    dispatch(addQuizDifficulty({ key, value }));
    router.push('/quiz');
  }
  return (
    <div className="">
      <div className='h-[240px] rounded-b-3xl bg-purple-500 static'></div>
      <div className="flex justify-center">
        <Image src='/logo.png' width={40} height={40} alt="logo" className='z-50 relative top-[-216px]' />
      </div>
      <div className='h-[220px] z-0 relative top-[-82px] bg-white rounded-3xl mx-auto w-[96%] shadow-lg flex justify-center items-center'>
        <h1 className='text-xl font-semibold'>Select Difficulty </h1>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-5 lg:mx-0 lg:max-w-none">
          {DIFFICULTY_DATA.map((difficulty, index) => (
            <button className="flex flex-col items-start justify-between cursor-pointer" key={difficulty.key} onClick={() => handleDifficultySelect(difficulty.key, difficulty.value)}>
              <div className="relative w-full hover:border-purple-500 hover:border-2 hover:rounded-2xl border-0">
                <h3 className=' text-black text-lg text-left mx-6 py-2'><span className='mx-2'>{index + 1}.</span>{difficulty.value}</h3>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </button>

          ))}
        </div>
      </div>
    </div>
  )
}
