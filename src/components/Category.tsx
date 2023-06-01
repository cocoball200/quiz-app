'use client';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { addQuizCategory } from '@/store/features/quiz/quizSlice';


const CATEGORY_DATA = [
  {
    id: 21,
    title: 'Sports',
    color: '#6a13f4'
  },
  {
    id: 23,
    title: 'History',
    color: '#6a13f4'
  },
  {
    id: 27,
    title: 'Animals',
    color: '#6a13f4'
  },
]

export default function Example() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCategorySelect = (category: number) => {
    dispatch(addQuizCategory(category));
    router.push('/difficulty'); // Navigate to the difficulty selection page
  };


  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Select the Category</h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none">
          {CATEGORY_DATA.map((category) => (
            <button className="flex flex-col items-start justify-between cursor-pointer" key={category.id} onClick={() => handleCategorySelect(category.id)}>
              <div className="relative w-full">
                <div className={`aspect-[16/9] w-full rounded-2xl bg-[#6a13f4] object-cover sm:aspect-[2/1]  flex justify-center items-center`}>
                  <h3 className=' text-white font-bold text-3xl'>{category.title}</h3>
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
