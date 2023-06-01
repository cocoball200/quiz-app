'use client';
import React from 'react';
import Router, { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addQuizDifficulty } from '@/store/features/quiz/quizSlice';
import { RootState } from '@/store/store';

const DIFFICULTY_DATA = [
  {
    id: 'easy',
    title: 'Esay',
  },
  {
    id: 'medium',
    title: 'Medium',
  },
  {
    id: 'hard',
    title: 'Hard',
  },
]

export default function DifficultyComponent() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { category } = useSelector((state: RootState) => state.quizStore);

  // if (!category) {
  //   router.push('/category');
  // }

  async function handleDifficultySelect(difficulty: string) {
    dispatch(addQuizDifficulty(difficulty));
    router.push('/quiz');
  }
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Select the Difficulty</h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none">
          {DIFFICULTY_DATA.map((difficulty) => (
            <button className="flex flex-col items-start justify-between cursor-pointer" key={difficulty.id} onClick={() => handleDifficultySelect(difficulty.id)} >
              <div className="relative w-full">
                <div className={`aspect-[16/9] w-full rounded-2xl bg-[#6a13f4] object-cover sm:aspect-[2/1]  flex justify-center items-center`}>
                  <h3 className=' text-white font-bold text-3xl'>{difficulty.title}</h3>
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
